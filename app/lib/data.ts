import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  User,
  Revenue,
} from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';


export async function fetchRevenue() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();

  try {
    
    const data = await sql<Revenue>`SELECT * FROM revenue`;


    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  noStore();

  try {
    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchCardData() {
  noStore();

  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  noStore();

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoicesPages(query: string) {
  noStore();

  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  noStore();

  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));
    console.log(invoice); // Invoice is an empty array []
    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers() {
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  noStore();

  try {
    const data = await sql<CustomersTableType>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

///////////////////////////////////////////////////////

const certificatesBundle = [
  {
    title: "IBM",
    collection: [
      {alt: "Web Development", src: "web-dev.png", w:175, h:0},
      {alt: "IBM Accelerate", src: "IBMAccelerate.png", w:175, h:0},
      {alt: "Professional Skills", src: "wps.png", w:175, h:0},
    ]
  },
  {
    title: "Coursera",
    collection: [
      {alt: "IBM Databases w/ Python", src: "DSQL.png", w:350, h:0},
      {alt: "Databases w/ Python", src: "DBP.png", w:350, h:0},
      {alt: "Python Data Structures", src: "PD.png", w:350, h:0},
      {alt: "Programming for Everyone", src: "4Every1.png", w:350, h:0},
    ]
  },
  {
    title: "Nvidia",
    collection: [
      {alt: "Fundamentals of CUDA", src: "FundamentalsCUDA.png", w:350, h:0},
      {alt: "Streams in CUDA", src: "acceleratedCUDA.png", w:350, h:0},
      {alt: "Scaling Workloads w/ CUDA", src: "scalingCUDA.png", w:350, h:0},
    ]
  },
]

const skillsBundle = [
  {
    title: 'Languages',
    collection: [
      {alt: "Python", src: "python.png", w:50, h:0},
      {alt: "JS", src: "js2.png", w:50, h:0},
      {alt: "TS", src: "ts.png", w:50, h:0},
      {alt: "C/C++", src: "cplus.png", w:45, h:0},
    ]
  },
  {
    title: 'Database Experience',
    collection: [
      {alt: "MySQL", src: "mysql.png", w:50, h:0},
      {alt: "Mongo", src: "mongodb.png", w:50, h:0},
      {alt: "Neo4j", src: "neo4j.png", w:50, h:40},
    ]
  },
  {
    title: 'Frontend Experience',
    collection: [
      {alt: "Angular", src: "angular.png", w:45, h:0},
      {alt: "React", src: "react.png", w:50, h:0},
      {alt: "MUI", src: "mui.png", w:50, h:0},
      {alt: "Bootstrap", src: "boot.png", w:45, h:0},
    ]
  },
  {
    title: 'Technologies',
    collection: [
      {alt: "Git", src: "git.png", w:45, h:0},
      {alt: "Node.js", src: "node.png", w:45, h:0},
      {alt: "Next.js", src: "next.png", w:45, h:0},
    ]
  }
]



const companies = [
{   imageData: {alt: "Carle Health", src: "carle.png", w:135, h:0}, 
  location: 'Champaign, IL',
  roles: [
  {
      title:"Sys-Ops & Care Mgmt Analyst", 
      timeline: "Feb 2024 - Current",
      description: []
  }
  ]
},
{   imageData: {alt: "Motorola Solutions", src: "Motorola-Solutions.png", w:275, h:0},
  location: 'Champaign, IL',
  roles: [
  {
      title:"Software Engineer: Frontend", 
      timeline: "Sept 2023 - Dec 2023",
      description: [
      `Gained hands-on experience in writing unit tests and end-to-end tests 
      for Angular applications, ensuring code reliability and quality.`,
      `Wrote production ready code, conducted rigorous testing, review, and 
      followed best practices for secure and reliable web app.`,
      `Engaged in effective communication to convey ideas, suggestions, and 
      project updates, ensuring myself and team members were well-informed and 
      aligned with project goals.
      `
      ]
  },
  {
      title:"Software Engineer: Backend", 
      timeline: "May 2021 - May 2022",
      description: [
      `Used python to create a dynamic method of generating and replacing tailored 
      MySQL procedures to optimize database performance based on a user\'s product ownership.`,
      `Consolidated and cleaned data from CouchDB and Cosmos with Python, using 
      multiprocessing libraries for seamless information flow across our application\'s pipeline.`,
      `Engaged with an international teams in daily design meetings to drive 
      project success and maintain clear communication to meet biweekly sprint goals.`
      ]
  }
  ],
},
{   imageData: {alt: "IBM", src: "ibm.png", w:100, h:0},
  location: 'Bloomginton, IL',
  roles: [
  {
      title:"Software Developer", 
      timeline: "May 2022 - Aug 2022",
      description: [
      `Proficient in leveraging RESTful APIs within Python development, utilizing tools like GitHub 
      and ServiceNow to streamline collaboration and project management.`,
      `Skilled in designing and implementing MySQL databases, seamlessly integrating 
      them with Python applications to optimize data storage and retrieval capabilities.`,
      `Engaged in secure coding practices incorporating user / pw protocols to safeguard 
      sensitive user information and maintain system integrity.`
      ]
  },
  ],
},
]










export { companies, certificatesBundle, skillsBundle};
