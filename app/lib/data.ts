
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
    title: "Languages",
    collection: [
      {alt: "Python", src: "python.png", w:50, h:0},
      {alt: "JS", src: "js2.png", w:50, h:0},
      {alt: "TS", src: "ts.png", w:50, h:0},
      {alt: "C/C++", src: "cplus.png", w:45, h:0},
    ]
  },
  {
    title: "Database Experience",
    collection: [
      {alt: "MySQL", src: "mysql.png", w:50, h:0},
      {alt: "Mongo", src: "mongodb.png", w:50, h:0},
      {alt: "Neo4j", src: "neo4j.png", w:50, h:40},
    ]
  },
  {
    title: "Frontend Experience",
    collection: [
      {alt: "Angular", src: "angular.png", w:45, h:0},
      {alt: "React", src: "react.png", w:50, h:0},
      {alt: "MUI", src: "mui.png", w:50, h:0},
      {alt: "Bootstrap", src: "boot.png", w:45, h:0},
    ]
  },
  {
    title: "Technologies",
    collection: [
      {alt: "Git", src: "git.png", w:45, h:0},
      {alt: "Node.js", src: "node.png", w:45, h:0},
      {alt: "Next.js", src: "next.png", w:45, h:0},
    ]
  }
]

const activities = [
  {
    imageData: {alt: "First Lego League", src: "activities/fll-logo.png", w:175, h:0}, 
    subTitle: "Champaign, IL",
    roles: [
      { 
        title: "Volunteer",
        timeline: "Jan 2023 - May 2023",
        description: [
          `I served as a coach / mentor to the teams, helping them learn about robotics, coding, and problem-solving. 
          This included guiding students to understand the core values of FIRST LEGO League, which are discovery, 
          innovation, impact, inclusion, teamwork, and fun.`,
          `I helped with workshops on specific skills, including sessions on programming LEGO SPIKE robots, 
          brainstorming solutions to problems, and effectively presenting and communicating.`
        ],
      }
    ]
  },
  {
    imageData: {alt: "Expert Learning Assistant", src: "activities/physics.png", w:275, h:0}, 
    subTitle: "Urbana, IL",
    roles: [
      { 
        title: `Expert Learning Assistant`,
        timeline: "Aug 2020 - May 2021",
        description: [
          `Assisted students and instructors with lab activities and discuss useful methods of lab completion for students.`,
          `Practiced effective questioning and active listening strategies when engaging with students.`
        ],
      }
    ]
  },
  {
    imageData: {alt: "SHPE UIUC Chapter", src: "activities/shpe.png", w:175, h:0}, 
    subTitle: "Urbana, IL",
    roles: [
      { 
        title: "Fundraising Co-Lead",
        timeline: "July 2020 - May 2021",
        description: [
          `Brainstormed, organized and facilitated creative alternatives fundraising events for the organization and local charities.`,
          `Efficiently communicated with my co-lead for budgeting schemes to prevent overspending and fundraising logistic.`
        ],
      },
      { 
        title: "Activities Lead",
        timeline: "July 2020 - May 2021",
        description: [
          `Created alternative online activities for the organization's outreach programs that are both engaging and constructive.`,
          `Organized and executed activities with a written plan to prepare for any logistical issues.`
        ],
      },
      { 
        title: "Round-Table Treasurer",
        timeline: "Aug 2019 - May 2020",
        description: [
          `Planned and executed fundraising events to raise money for social events and non-profit organizations.`,
          `Lead a team to organize the biggest event for SHPE, the date auction / dance, for funding the UIUC Chapter.`
        ],
      }
    ]
  },
]


const companies = [
{   
  imageData: {alt: "Carle Health", src: "carle.png", w:135, h:0}, 
  location: "Champaign, IL",
  roles: [
  {
      title:"Sys-Ops & Care Mgmt Analyst", 
      timeline: "Feb 2024 - Current",
      description: [],
  }
  ]
},
{   
  imageData: {alt: "Motorola Solutions", src: "Motorola-Solutions.png", w:275, h:0},
  location: "Champaign, IL",
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
      aligned with project goals.`
      ],
  },
  {
      title:"Software Engineer: Backend", 
      timeline: "May 2021 - May 2022",
      description: [
      `Used python to create a dynamic method of generating and replacing tailored 
      MySQL procedures to optimize database performance based on a user\"s product ownership.`,
      `Consolidated and cleaned data from CouchDB and Cosmos with Python, using 
      multiprocessing libraries for seamless information flow across our application\"s pipeline.`,
      `Engaged with an international teams in daily design meetings to drive 
      project success and maintain clear communication to meet biweekly sprint goals.`
      ],
  }
  ],
},
{   
  imageData: {alt: "IBM", src: "ibm.png", w:100, h:0},
  location: "Bloomginton, IL",
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
      ],
  },
  ],
},
]










export { companies, activities, certificatesBundle, skillsBundle};
