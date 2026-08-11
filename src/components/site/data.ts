import fedible from "@/assets/proj-fedible.png";
import neocarz from "@/assets/proj-neocarz.png";
import homebite from "@/assets/proj-homebite.png";
import xchools from "@/assets/proj-xchools.png";

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Live Projects", href: "#live-projects" },
  { label: "Contact", href: "#contact" },
];

export const ROLES = [
  "Software QA Engineer",
  "Manual Tester",
  "Automation Tester",
  "Quality Assurance Engineer",
];

export const STATS = [
  { label: "Experience", value: 1, suffix: "+ Years" },
  { label: "Live Projects", value: 4, suffix: "" },
  { label: "Manual and Automation Projects", value: 10, suffix: "" },
  { label: "Bugs Reported", value: 500, suffix: "+" },
  { label: "Test Cases Executed", value: 1000, suffix: "+" },
  { label: "Automation Scripts", value: 100, suffix: "+" },
  { label: "Modules Tested", value: 60, suffix: "+" },
  { label: "Bug Detection Accuracy", value: 98, suffix: "%" },
];

export const DASHBOARD = [
  { label: "Live Projects", value: 4, suffix: "+" },
  { label: "Applications Tested", value: 15, suffix: "+" },
  { label: "Test Cases", value: 1000, suffix: "+" },
  { label: "Bugs Reported", value: 500, suffix: "+" },
  { label: "Regression Cycles", value: 100, suffix: "+" },
  { label: "Modules Tested", value: 60, suffix: "+" },
];

export const SKILL_GROUPS = [
  {
    title: "Testing",
    items: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "UI Testing",
      "API Testing",
      "Cross Browser Testing",
      "Responsive Testing",
    ],
  },
  {
    title: "Automation",
    items: ["Selenium WebDriver", "Playwright", "TestNG", "Java"],
  },
  { title: "API", items: ["Postman"] },
  {
    title: "Tools",
    items: ["Jira", "Git", "GitHub", "Apache JMeter", "Browser DevTools", "VS Code"],
  },
  { title: "Languages", items: ["Java", "JavaScript", "SQL", "HTML", "CSS"] },
  {
    title: "Concepts",
    items: [
      "SDLC",
      "STLC",
      "Agile",
      "Scrum",
      "Bug Life Cycle",
      "Severity",
      "Priority",
      "Requirement Analysis",
      "RTM",
      "Test Case Design",
      "Defect Reporting",
    ],
  },
];

export const EXPERIENCE = [
  {
    company: "Brands Trek Coders LLP",
    role: "QA Engineer",
    period: "June 2026 – Present",
    current: true,
    points: [
      "Manual Testing",
      "Requirement Analysis",
      "Functional Testing",
      "Smoke Testing",
      "Sanity Testing",
      "Regression Testing",
      "UI Testing",
      "Bug Reporting",
      "Retesting",
      "Release Verification",
      "Developer Collaboration",
      "Agile Methodology",
    ],
  },
  {
    company: "Bridgeon Solutions LLP",
    role: "Software Testing Intern",
    period: "July 2025 – May 2026",
    current: false,
    points: [
      "Manual Testing",
      "Automation Testing",
      "Test Case Design",
      "Bug Reporting",
      "Regression Testing",
      "Selenium WebDriver",
      "Playwright",
      "API Testing",
      "Postman",
      "Agile Methodology",
    ],
  },
];

export const LIVE_PROJECTS = [
  {
    name: "Fedible",
    url: "https://fedible.in/",
    domain: "Financial Wellness Platform (FinTech)",
    platform: "Web Application",
    role: "QA Tester",
    status: "Live",
    image: fedible,
    description:
      "A modern financial wellness platform that helps users improve financial literacy through assessments, financial planning tools, calculators, and personalized insights.",
    tech: ["Manual Testing", "Functional", "Regression", "Smoke", "Sanity", "UI Testing", "Jira"],
    responsibilities: [
      "Authentication Testing",
      "User Registration",
      "Login",
      "Profile Management",
      "Financial Assessment",
      "Dashboard Testing",
      "Financial Calculators",
      "Reports & Analytics",
      "Functional Testing",
      "Smoke Testing",
      "Regression Testing",
      "Sanity Testing",
      "UI Testing",
      "Bug Reporting",
    ],
  },
  {
    name: "Neocarz",
    url: "https://neocarz.com/en",
    domain: "Automobile Marketplace",
    platform: "Web Application",
    role: "QA Tester",
    status: "Live",
    image: neocarz,
    description:
      "An automobile marketplace where users can search, compare, and enquire about vehicles.",
    tech: ["Manual Testing", "Cross Browser", "Responsive", "Regression", "Jira"],
    responsibilities: [
      "Vehicle Listings",
      "Advanced Search",
      "Filters",
      "Authentication",
      "Booking",
      "Enquiry Forms",
      "Dashboard Testing",
      "Cross Browser Testing",
      "Responsive Testing",
      "Regression Testing",
      "Bug Reporting",
    ],
  },
  {
    name: "Homebite",
    url: "https://homebiteuae.com/",
    domain: "Restaurant Ordering",
    platform: "Mobile Application",
    role: "QA Tester",
    status: "Live",
    image: homebite,
    description:
      "A mobile application for ordering food online with secure checkout and real-time order tracking.",
    tech: ["Mobile Testing", "Payments", "Regression", "Smoke", "Sanity", "UI Testing"],
    responsibilities: [
      "Authentication",
      "Restaurant Browsing",
      "Menu",
      "Cart",
      "Checkout",
      "Payments",
      "Push Notifications",
      "Order Tracking",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "UI Testing",
      "Bug Reporting",
    ],
  },
  {
    name: "Xchools",
    url: "https://app.xchools.in/",
    domain: "School ERP",
    platform: "Web Application + Mobile Application",
    role: "QA Tester",
    status: "Live",
    image: xchools,
    description:
      "A complete School Management System for administrators, teachers, students, and parents.",
    tech: ["Manual Testing", "Role Based Access", "Functional", "Regression", "UI Testing"],
    responsibilities: [
      "Admin Module",
      "Student Module",
      "Teacher Module",
      "Attendance",
      "Reports",
      "Role Based Access",
      "Dashboard",
      "Forms",
      "Regression Testing",
      "Functional Testing",
      "Smoke Testing",
      "UI Testing",
      "Bug Reporting",
    ],
  },
];

export const TRAINING_PROJECTS = [
  {
    name: "Resiko AI Resume Builder",
    tech: ["Manual Testing", "Selenium WebDriver", "Java", "TestNG"],
    description:
      "Performed end-to-end manual and automation testing of authentication, resume creation, validation, regression testing, and cross-browser compatibility.",
  },
  {
    name: "Paragon WebResto",
    tech: ["Manual Testing", "Playwright", "JavaScript"],
    description:
      "Restaurant management web application tested for ordering, billing, customer workflows, regression testing, and browser compatibility.",
  },
];

export const CONTACT = {
  email: "jumanafathimaep@gmail.com",
  phone: "+91 8921743121",
  location: "Calicut, Kerala, India",
  linkedin: "https://www.linkedin.com/in/jumanafathimaep/",
  github: "https://github.com/Jumanaep",
  resume: "/Jumana Fathima Software Tester.pdf",
};
