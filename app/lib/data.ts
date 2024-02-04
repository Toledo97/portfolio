const certificatesBundle = [
  {
    title: "IBM",
    collection: [
      {alt: "Web Development", src: "web-dev.png", w:175, h:0, issued: 'January 18, 2024', verify: 'https://www.credly.com/badges/e8d8f40c-aac9-4a74-a3de-a249f336ac72/linked_in_profile'},
      {alt: "IBM Accelerate", src: "IBMAccelerate.png", w:175, h:0, issued: 'August 1, 2022', verify: 'https://www.credly.com/badges/8a06d566-8657-4850-bd18-aaba6cf13e8c?source=linked_in_profile'},
      {alt: "Professional Skills", src: "wps.png", w:175, h:0, issued: 'June 27, 2022', verify: 'https://www.credly.com/badges/82097ced-d7cb-4f7d-a790-50769f3edbe3?source=linked_in_profile'},
    ]
  },
  {
    title: "Coursera",
    collection: [
      {alt: "IBM Databases w/ Python", src: "DSQL.png", w:350, h:0, issued: 'June 10, 2021', verify: 'https://www.coursera.org/account/accomplishments/verify/FMS2DHUPVJAC?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'},
      {alt: "Databases w/ Python", src: "DBP.png", w:350, h:0, issued: 'May 29, 2021', verify: 'https://coursera.org/share/b35b12f2f1a1e8a981fdeb7e591f746c'},
      {alt: "Python Data Structures", src: "PD.png", w:350, h:0, issued: 'May 26, 2021', verify: 'https://www.coursera.org/account/accomplishments/verify/GW3BY2G99E8T'},
      {alt: "Programming for Everyone", src: "4Every1.png", w:350, h:0, issued: 'May 20, 2021', verify: 'https://coursera.org/share/d796b2c9e81a591443124a662ac050e7'},
    ]
  },
  {
    title: "Nvidia",
    collection: [
      {alt: "AI on Jetson Nano", src: "jetsonNano.png", w:250, h:0, issued: 'September 21, 2021', verify: 'https://courses.nvidia.com/certificates/e2d9a8c057944f1291873b8d8af6015f/'},
      {alt: "Streams in CUDA", src: "acceleratedCUDA.png", w:350, h:0, issued: 'August 6, 2021', verify: 'https://courses.nvidia.com/certificates/5e5deb98be46496fbb8102b8d6a44ed0'},
      {alt: "Scaling Workloads w/ CUDA", src: "scalingCUDA.png", w:350, h:0, issued: 'August 9, 2021', verify: 'https://courses.nvidia.com/certificates/9899dd72669e45c98978dc06abf0a35e'},
      {alt: "Fundamentals of CUDA", src: "FundamentalsCUDA.png", w:350, h:0, issued: 'April 25, 2021', verify: 'https://courses.nvidia.com/certificates/26378fb0acfe4a2fb1f026fa84d5109f'},
    ]
  },
]

const skillsBundle = [
  {
    title: "Frequent Languages",
    collection: [
      {alt: "Python", src: "python.png", w:50, h:0},
      // {alt: "JS", src: "js2.png", w:50, h:0},
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
      {alt: "React", src: "react.png", w:50, h:0},
      {alt: "MUI", src: "mui.png", w:50, h:0},
      {alt: "Bootstrap", src: "boot.png", w:45, h:0},
      {alt: "Angular", src: "angular.png", w:45, h:0},
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

const projects = [
  {
    title: 'Personal Website V2',
    subTitle: 'Web-Application',
    location: '',
    timeline: 'January 2024 - Current',
    description: [
      `Developing a dynamic and responsive web application using Next.js, 
        a React framework, to enhance user experience and optimize performance.`,
      `Designing and implementing reusable React components to ensure consistency 
        and maintainability across the application.`,
      `Integrating CRUD functionality with Github authorization to allow users to 
        create, edit, and delete messages in my guestbook.`
    ]
  },
  {
    title: 'Creator Capital Index',
    subTitle: 'Web-Application',
    location: 'Champaign, IL',
    timeline: 'Aug 2023 - Nov 2023',
    description: [
      `Developed a data-driven platform to track trending YouTube channels 
      and relevant analytics, merging datasets from Kaggle and utilizing Google\'s YouTube API.`,
      `Lead in the design process and organization of the project. Ensuring for 
      deadlines to be met and setting meetings.`,
      `Developed a dynamic website with CRUD operations, utilizing Node.js for the backend, React for the frontend,
      and MySQL for database management, resulting in an efficient and user-friendly interface.`,
    ]
  },
  {
    title: 'GPU Convolution Kernel Optimizations',
    subTitle: `Optimized a forward-pass of a convolutional 
    layer using CUDA and profiling tools like Nsight Systems and Nsight-Compute.`,
    location: 'Champaign, IL',
    timeline: 'Nov 2022 - Dec 2022',
    description: [
      `Shared Memory: Data stored in shared memory to reduce FP16 datatype conversion delay.`,
      `Fixed point (FP16) arithmetic: Split channel iteration to reduce serial calculation.`,
      `Data Transfer with Streams: Overlapped segmented data transfer with kernel execution.`,
    ]
  },
  {
    title: 'CarlOS',
    subTitle: 'Operating System',
    location: 'Champaign, IL',
    timeline: 'Mar 2022 - May 2022',
    description: [
      `The final state of the OS consisted of a single terminal with a read-only file-system. 
      It can execute and close basic c programs through the terminal.`,
      `Created custom keyboard driver to interact with the terminal and file-system with some shortcuts enabled.`,
      `Implemented 2 Level paging scheme (page directory / table) that consists of 4MB or 4KB pages.`,
    ]
  },
  {
    title: 'Home Security System',
    subTitle: 'TI MSP432',
    location: 'Champaign, IL',
    timeline: 'Nov 2021',
    description: [
      `Created a responsive user interface using a keypad and LCD screen, facilitating user 
      interaction and system control.`,
      `Programmed control mechanisms for lighting and fan systems using PWM outputs, enabling 
      user-defined adjustments.`,
      `Integrated a temperature sensor, allowing for real-time temperature monitoring and 
      display on the LCD screen.`,
    ]
  },
  {
    title: 'Tetris Video game',
    subTitle: 'D10 Lite FPGA',
    location: 'Champaign, IL',
    timeline: 'Apr 2021 - May 2021',
    description: [
      `Designed basic logic on Quartus Prime Platform to output in VGA format and a SoC - NIOS II processor for USB control.`,
      `Modified Xbox One controller drivers to function on the FPGA for game movement and general I/O.`,
      `Created custom block sprites that are projected in the VGA format and saved in 
      a two-dimensional, tri-directional shift registers.`,
    ]  
  },
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
          `Served as a coach / mentor to the teams, helping them learn about robotics, coding, and problem-solving. 
          This included guiding students to understand the core values of FIRST LEGO League, which are discovery, 
          innovation, impact, inclusion, teamwork, and fun.`,
          `Helped with workshops on specific skills, including sessions on programming LEGO SPIKE robots, 
          brainstorming solutions to problems, and effectively presenting and communicating.`,
          'Collaborated with other coaches and mentors to enhance the overall experience for participating teams.'
        ],
      }
    ]
  },
  {
    imageData: {alt: "Expert Learning Assistant", src: "activities/physics.png", w:250, h:0}, 
    subTitle: "Urbana, IL",
    roles: [
      { 
        title: `Expert Learning Assistant`,
        timeline: "Aug 2020 - May 2021",
        description: [
          `Assisted students and instructors with lab activities and discussed useful methods of lab completion for students.`,
          `Practiced effective questioning and active listening strategies when engaging with students to enhance their learning experience.`,
          `Created a lab assignment based on the students' interests and needs to improve their understanding of elastic and inelastic collisions.`,
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
          `Brainstormed, organized and facilitated alternative fundraising events for the organization and local charities.`,
          `Efficiently communicated with my co-lead for budgeting schemes to prevent overspending and fundraising logistic.`,
          `Managed organization funding for social and professional events including conventions and career fairs that require travel.`
        ],
      },
      { 
        title: "Activities Lead",
        timeline: "July 2020 - May 2021",
        description: [
          `Created alternative online activities for the organization's outreach programs that are both engaging and constructive.`,
          `Organized and executed activities with a written plan to prepare for any logistical issues.`,
          `Established partnerships with local schools and other educational institutions to expand the reach of engineering education programs.`
        ],
      },
      { 
        title: "Round-Table Treasurer",
        timeline: "Aug 2019 - May 2020",
        description: [
          `Planned and executed fundraising events to raise money for social events and non-profit organizations.`,
          `Lead a team to organize the biggest event for SHPE, "The Date Auction / Dance", for funding the UIUC Chapter.`,
          `Shadowed the whole organization's Treasurer to learn more about manging events, money, and logistics of planning 
            and executing events and meetings.`
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

export { companies, activities, projects, certificatesBundle, skillsBundle};
