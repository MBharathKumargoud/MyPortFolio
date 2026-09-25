// ============================================================
// Portfolio Data — M Bharath Kumar Goud
// Corporate Minimalist & Modern Developer Profile
// ============================================================

export const personalInfo = {
  name: "M Bharath Kumar Goud",
  nameShort: "MBKG",
  title: "Java Developer | Data Analytics Enthusiast",
  label: "Computer Science Engineering Student",
  description:
    "3rd-year B.Tech Computer Science & Engineering student passionate about software development, data analytics, and building practical applications.",
  location: "Hyderabad, India",
  email: "bharathkumargoud267@gmail.com",
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
    "I am a 3rd-year B.Tech Computer Science & Engineering student with a Diploma in Computer Science & Engineering. I am interested in software development, data analytics, and building practical applications.",
    "I enjoy working with Java, SQL, databases and problem solving while continuously learning through projects and hands-on experience.",
  ],
  info: [
    { label: "LOCATION", value: "Hyderabad, India" },
    { label: "EDUCATION", value: "B.Tech CSE" },
    { label: "CURRENTLY", value: "3rd Year" },
  ],
  highlights: [
    "LeetCode 50 Days Badge recipient through persistent algorithmic practice",
    "Tata GenAI Powered Data Analytics Job Simulation credential via Forage",
    "Six-month intensive industrial training at Pixel Quest in database systems & Java",
    "HackerRank 4★ SQL & 3★ Java badges with verified certifications",
  ],
};

export const skills = {
  languages: ["Java", "SQL", "Python", "HTML", "CSS"],
  core: [
    "Data Structures & Algorithms",
    "DBMS",
    "Database Management",
    "Web Basics",
  ],
  tools: ["Git", "GitHub", "VS Code"],
};

export const projects = [
  {
    id: "01",
    slug: "careerx",
    title: "CareerX",
    subtitle: "AI-POWERED CAREER PLACEMENT PLATFORM",
    description:
      "CareerX analyzes an uploaded resume and public GitHub profile/repositories against a target job role and provides career-oriented insights.",
    architecture: "Multi-Source Extraction → LLM Reasoning Pipeline → Structured Career Strategy",
    features: [
      "Resume PDF/DOCX text extraction",
      "GitHub profile analysis",
      "Repository analysis",
      "Target-role fit analysis",
      "Strong skill identification",
      "Missing/weak skill identification",
      "Resume improvement suggestions",
      "GitHub improvement suggestions",
      "Prioritized skills to learn",
      "Recommended projects",
      "Interview preparation",
      "30-day action plan",
      "60–90 day roadmap",
      "Suggested job titles",
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
      "A web application for managing expenses with user registration, authentication and account-access functionality.",
    architecture: "Client-Side SPA → Structured Form & State Validation → Secure Session & Expense Ledger",
    features: [
      "User registration",
      "User login",
      "Password validation",
      "Minimum password length validation",
      "Letter requirement",
      "Number requirement",
      "Special-character requirement",
      "Password reset",
      "Account access screens",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://expensetracker0505.netlify.app/",
    githubUrl: "https://github.com/MBharathKumargoud/Expense-Tracker",
  },
];

export const experience = [
  {
    role: "Data Analyst Intern",
    company: "Bluestock Fintech",
    period: "20 June 2026 — 20 August 2026",
    type: "Internship",
    description:
      "Completed a Data Analyst internship at Bluestock Fintech and gained practical exposure to data analysis tasks in a professional fintech environment.",
    tags: ["Data Analysis", "Fintech", "Reporting"],
    certificateImage: "/certs/bluestock-fintech-internship.jpg",
  },
  {
    role: "Industrial Training",
    company: "Pixel Quest",
    period: "Six-month industrial training",
    type: "Training",
    description:
      "Six-month industrial training focused on database management, SQL, and core programming principles in a practical setting.",
    tags: ["Database Management", "SQL", "Core Programming"],
    certificateImage: "/certs/pixelquest-industrial-training.png",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "MLR Institute of Technology, Hyderabad",
    period: "2024 – 2028",
    status: "Currently 3rd Year",
  },
  {
    degree: "Diploma in Computer Science & Engineering",
    institution: "Government Polytechnic College, Gadwal",
    period: "2022 – 2025",
    status: "3-Year Diploma",
  },
  {
    degree: "SSC, Telangana Board",
    institution: "Zilla Parishad High School",
    period: "2020 – 2022",
    status: "Secondary Education",
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
    id: "hr-sql-basic",
    name: "SQL (Basic)",
    org: "HackerRank",
    result: "Verified Skill Certification",
    date: "April 2026",
    credentialId: "B410DB7B7FB4",
    image: "/certs/hackerrank-sql-basic.jpg",
  },
  {
    id: "hr-sql-intermediate",
    name: "SQL (Intermediate)",
    org: "HackerRank",
    result: "Verified Skill Certification",
    date: "April 2026",
    credentialId: "A0F69D04A43F",
    image: "/certs/hackerrank-sql-intermediate.jpg",
  },
  {
    id: "oracle-java",
    name: "Oracle Java Foundations",
    org: "LinkedIn Learning",
    result: "Course Completed",
    date: "January 2026",
    credentialId: "ccfa116c4e4ef8ff5f3195af683a8b4c2e723c0df4a1da243cbaa8fbedb43788",
    image: "/certs/oracle-java-foundations.jpg",
  },
  {
    id: "tata-forage",
    name: "GenAI Powered Data Analytics Job Simulation",
    org: "Tata / Forage",
    result: "Certificate of Completion",
    date: "August 12, 2026",
    credentialId: "6a7b566cb622d831d54b79c8",
    image: "/certs/tata-genai-analytics.jpg",
  },
  {
    id: "bluestock-intern",
    name: "Data Analyst Internship",
    org: "Bluestock Fintech",
    result: "Certificate of Internship",
    date: "June–August 2026",
    credentialId: "BFDA66456",
    image: "/certs/bluestock-fintech-internship.jpg",
  },
  {
    id: "pixelquest-train",
    name: "Industrial Training",
    org: "Pixel Quest",
    result: "Six-Month Industrial Training",
    date: "Nov 2024 — May 2025",
    credentialId: "22214-CS-001",
    image: "/certs/pixelquest-industrial-training.png",
  },
];

export const profiles = [
  {
    name: "GitHub",
    handle: "@MBharathKumargoud",
    url: "https://github.com/MBharathKumargoud",
    note: "Public code repositories & open source implementations",
    stat: "Active Contributor",
  },
  {
    name: "LinkedIn",
    handle: "bharath-kumar-goud",
    url: "https://www.linkedin.com/in/bharath-kumar-goud-15786b2a1/",
    note: "Professional network, updates & verified credentials",
    stat: "Professional Profile",
  },
  {
    name: "LeetCode",
    handle: "@BHARATHKUMARGOUD",
    url: "https://leetcode.com/u/BHARATHKUMARGOUD/",
    note: "Consistent algorithmic problem solving & DSA practice",
    stat: "50 Days Badge",
  },
  {
    name: "HackerRank",
    handle: "@25r25a0505",
    url: "https://www.hackerrank.com/profile/25r25a0505",
    note: "Java & SQL practice with verified skill assessments",
    stat: "4★ SQL · 3★ Java",
  },
];
