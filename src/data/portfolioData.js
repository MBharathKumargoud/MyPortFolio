// ============================================================
// Portfolio Data — M Bharath Kumar Goud
// "Professional Corporate — Subtle & Modern"
// ============================================================

export const personalInfo = {
  name: "M Bharath Kumar Goud",
  displayName: "M Bharath",
  title: "Java Developer | Data Analytics Enthusiast",
  label: "COMPUTER SCIENCE ENGINEERING STUDENT",
  description:
    "Passionate about building real-world applications and exploring the intersection of software development, data and analytics.",
  location: "Hyderabad, India",
  email: "bharathkumargoud267@gmail.com",
  emailUrl:
    "https://mail.google.com/mail/?view=cm&to=bharathkumargoud267@gmail.com",
  phone: "+91-94946 01007",
  year: "3rd Year",
  degree: "B.Tech CSE",
  socials: {
    github: "https://github.com/MBharathKumargoud",
    linkedin: "https://www.linkedin.com/in/bharath-kumar-goud-15786b2a1/",
    leetcode: "https://leetcode.com/u/BHARATHKUMARGOUD/",
    hackerrank: "https://www.hackerrank.com/profile/25r25a0505",
  },
  resumeUrl: "/M_Bharath_Kumar_Goud_Resume.pdf",
};

export const aboutContent = {
  heading: "BUILDING THROUGH LEARNING.",
  paragraphs: [
    "I am a 3rd-year B.Tech Computer Science & Engineering student at MLR Institute of Technology, Hyderabad, with a strong foundation built through a 3-Year Diploma in Computer Science & Engineering from Government Polytechnic College, Gadwal.",
    "Passionate about software development and data analytics, I specialize in core Java, SQL, relational database management systems, and practical algorithmic problem solving. I focus on developing clean, dependable, and production-grade applications that solve tangible problems.",
  ],
  info: [
    { label: "LOCATION", value: "Hyderabad, India" },
    { label: "DEGREE", value: "B.Tech in Computer Science & Engineering" },
    { label: "CURRENT STATUS", value: "3rd Year (2024–2028)" },
    { label: "PREVIOUS DIPLOMA", value: "Diploma in CSE (2022–2025)" },
  ],
  highlights: [
    "LeetCode 50 Days Badge recipient through persistent algorithmic practice",
    "Elite 86% in NPTEL Programming in Java certification (IIT Kharagpur)",
    "HackerRank Verified Skill Certifications in SQL (Basic & Intermediate) · 4★ SQL & 3★ Java",
    "Completed Tata GenAI Powered Data Analytics Job Simulation via Forage",
    "Six-month intensive industrial training at Pixel Quest in database systems & Java",
    "Completed Data Analyst Internship at Bluestock Fintech",
  ],
};

export const skillsGrouped = [
  {
    category: "PROGRAMMING",
    skills: ["Java", "Python", "SQL"],
  },
  {
    category: "WEB",
    skills: ["HTML", "CSS"],
  },
  {
    category: "DATABASE",
    skills: ["MySQL", "DBMS"],
  },
  {
    category: "CORE",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming"],
  },
  {
    category: "TOOLS & PLATFORMS",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export const projects = [
  {
    id: "01",
    slug: "careerx",
    title: "CareerX / Placement Agent",
    subtitle: "AI-POWERED CAREER PLACEMENT PLATFORM",
    description:
      "An AI-powered career placement platform that analyzes a user's resume and public GitHub profile/repositories against a target role to deliver comprehensive role-fit evaluations, identify critical skill gaps, and generate step-by-step career acceleration roadmaps.",
    architecture: "Multi-Source Extraction → LLM Reasoning Pipeline → Structured Career Strategy",
    features: [
      "Resume analysis & PDF/DOCX text extraction",
      "GitHub profile & repository analysis",
      "Target role-fit scoring & gap analysis",
      "Strong skills & missing/weak skills breakdown",
      "Actionable resume & GitHub improvement suggestions",
      "Prioritized skills to learn & recommended projects",
      "Tailored interview preparation",
      "30-day action plan & 60–90 day milestones",
      "Targeted job title recommendations",
    ],
    tech: [
      "Python",
      "FastAPI",
      "Google Gemini API",
      "LangChain",
      "LangServe",
      "GitHub API",
    ],
    liveUrl: "https://placement-agent-aysa.onrender.com/agent/playground/",
    githubUrl: "https://github.com/MBharathKumargoud/Placement_agent",
  },
  {
    id: "02",
    slug: "expense-tracker",
    title: "Expense Tracker",
    subtitle: "FULL-STACK WEB APPLICATION",
    description:
      "A full-stack expense management web application with complete user registration, authentication, multi-rule password verification, password reset, and personal ledger tracking.",
    architecture: "Client-Side SPA → Structured Form & State Validation → Secure Session & Expense Ledger",
    features: [
      "User registration & login workflows",
      "Multi-rule password validation (length, letter, number, special character)",
      "Dedicated password reset & account access screens",
      "Interactive ledger for expense logging and categorization",
      "Deployed and accessible live on Netlify",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://expensetrackerc7.netlify.app/",
    githubUrl: "https://github.com/MBharathKumargoud/Expense-Tracker",
  },
];

export const experience = [
  {
    role: "Data Analyst Intern",
    company: "Bluestock Fintech",
    period: "20 Jun 2026 – 20 Aug 2026",
    type: "Internship",
    description:
      "Completed a Data Analyst internship at Bluestock Fintech and gained practical exposure to data analysis tasks in a professional fintech environment.",
    tags: ["Data Analysis", "Fintech", "Reporting", "Verification ID: BFDA66456"],
    certificateImage: "/certs/bluestock-fintech-internship.jpg",
    credentialId: "BFDA66456",
  },
  {
    role: "Industrial Training",
    company: "Pixel Quest",
    period: "18 Nov 2024 – 17 May 2025",
    type: "Industrial Training",
    description:
      "Six-month industrial training focused on database management, SQL, and core programming principles in a practical setting (PIN: 22214-CS-001, Government Polytechnic College, Gadwal).",
    tags: ["Database Management", "SQL", "Core Programming", "PIN: 22214-CS-001"],
    certificateImage: "/certs/pixelquest-industrial-training.png",
    credentialId: "22214-CS-001",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "MLR Institute of Technology, Hyderabad",
    period: "2024 – 2028 (Ongoing)",
    status: "Currently 3rd Year",
    details: "Focusing on Software Engineering, Data Structures, DBMS, and Data Analytics.",
  },
  {
    degree: "Diploma in Computer Science & Engineering",
    institution: "Government Polytechnic College, Gadwal",
    period: "2022 – 2025",
    status: "3-Year Diploma",
    details: "Comprehensive coursework in programming fundamentals, hardware basics, and database systems.",
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Zilla Parishad High School",
    period: "2020 – 2022",
    status: "Telangana Board",
    details: "Foundational education in mathematics and science.",
  },
];

export const certifications = [
  {
    id: "nptel-java",
    name: "Programming in Java",
    org: "NPTEL / IIT Kharagpur",
    result: "Elite — 86%",
    date: "Jan–Apr 2026",
    credentialId: "NPTEL26CS36S756203363",
    image: "/certs/nptel-programming-in-java.jpg",
  },
  {
    id: "hr-sql-intermediate",
    name: "SQL (Intermediate)",
    org: "HackerRank",
    result: "Verified Skill Certification",
    date: "08 Apr 2026",
    credentialId: "AOF69D04A43F",
    image: "/certs/hackerrank-sql-intermediate.jpg",
  },
  {
    id: "hr-sql-basic",
    name: "SQL (Basic)",
    org: "HackerRank",
    result: "Verified Skill Certification",
    date: "06 Apr 2026",
    credentialId: "B410DB7B7FB4",
    image: "/certs/hackerrank-sql-basic.jpg",
  },
  {
    id: "oracle-java",
    name: "Oracle Java Foundations",
    org: "LinkedIn Learning",
    result: "Course Completed",
    date: "Jan 04, 2026",
    credentialId: "ccfa116c4e4ef8ff5f3195af683a8b4c2e723c0df4a1da243cbaa8fbedb43788",
    image: "/certs/oracle-java-foundations.jpg",
  },
  {
    id: "tata-forage",
    name: "GenAI Powered Data Analytics Job Simulation",
    org: "Tata / Forage",
    result: "Certificate of Completion",
    date: "Aug 12, 2026",
    credentialId: "6a7b566cb622d831d54b79c8",
    image: "/certs/tata-genai-analytics.jpg",
  },
  {
    id: "bluestock-intern",
    name: "Data Analyst Internship",
    org: "Bluestock Fintech",
    result: "Certificate of Internship",
    date: "20 Jun 2026 – 20 Aug 2026",
    credentialId: "BFDA66456",
    image: "/certs/bluestock-fintech-internship.jpg",
  },
  {
    id: "pixelquest-train",
    name: "Industrial Training",
    org: "Pixel Quest",
    result: "Six-Month Industrial Training",
    date: "18 Nov 2024 – 17 May 2025",
    credentialId: "22214-CS-001",
    image: "/certs/pixelquest-industrial-training.png",
  },
];

export const profiles = [
  {
    name: "GitHub",
    handle: "@MBharathKumargoud",
    url: "https://github.com/MBharathKumargoud",
    note: "Public code repositories, backend services & open source implementations",
    stat: "Active Repositories",
  },
  {
    name: "LinkedIn",
    handle: "bharath-kumar-goud",
    url: "https://www.linkedin.com/in/bharath-kumar-goud-15786b2a1/",
    note: "Professional network, verified credentials & career milestones",
    stat: "Professional Network",
  },
  {
    name: "LeetCode",
    handle: "@BHARATHKUMARGOUD",
    url: "https://leetcode.com/u/BHARATHKUMARGOUD/",
    note: "Persistent algorithmic problem solving & DSA consistency",
    stat: "50 Days Badge",
  },
  {
    name: "HackerRank",
    handle: "@25r25a0505",
    url: "https://www.hackerrank.com/profile/25r25a0505",
    note: "Java & SQL skill assessments with verified credentials",
    stat: "4★ SQL · 3★ Java",
  },
];
