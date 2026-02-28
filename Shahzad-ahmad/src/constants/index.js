import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  office,
  html,
  css,
  reactjs,
  wordpress,
  tailwind,
  nodejs,
  canva,
  git,
  bootstrap,
  cplus,
  aptech,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  threejs,
  gresys,
  prodesign
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Wordpress Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "wordpress",
    icon: wordpress,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Ms Office",
    icon: office,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "C++",
    icon: cplus,
  },
];

const experiences = [
  {
    title: "Website Desiging",
    company_name: "Gresys.com",
    icon: gresys,
    iconBg: "#f9f9f9",
    date: "March 2020 - April 2022",
    points: [
      "Designing modern, responsive websites using HTML5, CSS3, JavaScript, and Bootstrap.",
      "Creating pixel-perfect UI designs from Figma, PSD, and PDF files..",
      "Ensuring cross-browser and cross-device compatibility for all designs.",
      "Collaborating with developers and clients to transform design concepts into fully functional websites.",
      "Optimizing website performance, load speed, and SEO-friendly structures.",
      "Implementing animations, hover effects, and interactive elements for enhanced user experience."
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "Prodesign.tech",
    icon: prodesign,
    iconBg: "#082f34",
    date: "Feb 2022 - Present",
    points: [
      "Developing custom WordPress themes from scratch based on client requirements and design mockups",
      "Customizing existing WordPress themes and plugins to match branding and functionality needs.",
      "Creating dynamic and user-friendly websites using Elementor, WPBakery, and other page builders.",
      "Building and maintaining WooCommerce stores, including product setup, payment integration, and customization.",
    ],
  },
  {
    title: "React Developer",
    company_name: "prodesign.tech",
    icon: prodesign,
    iconBg: "#082f34",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining dynamic web applications using React.js, Redux, and modern JavaScript.",
      "Implementing responsive design using CSS3, SCSS, Tailwind CSS, and Bootstrap.",
      "Optimizing application performance and load time using lazy loading, code splitting, and memoization.",
      "Collaborating with backend developers and UI/UX designers to implement clean and scalable front-end architectures.",
      "Using tools like Git, GitHub, and Jira for version control and task management."
    ],
  },
  {
    title: "Website Designing Instructor",
    company_name: "Aptech Grw, Swedish College , liveskill",
    icon: aptech,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Dec 2024",
    points: [
      "Conducted interactive training sessions on HTML5, CSS3, JavaScript, Bootstrap, and responsive web design.",
      "Designed and delivered structured course materials, assignments, and real-world projects for students.",
      "Mentored students in building portfolio-level websites from scratch using modern design practices.",
      "Provided one-on-one support to students for debugging code and improving design skills.",
      "Encouraged students to follow clean coding standards and best practices in frontend development."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "kangaroo ventures",
    description:
      "Kangaroo Ventures is a business service platform helping entrepreneurs launch startups in the U.S., offering company registration, virtual offices, bank and Stripe account setup, and legal/tax support.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "responsive",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/",
  },
  {
    name: "zindabhag",
    description:
      "Visa Bridge is an AI-powered immigration platform that analyzes your profile to suggest suitable countries worldwide, offering visa, job, and lifestyle guidance for easy migration.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "custom design",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://visabridge.com/",
  },
  {
    name: "Prodesign",
    description:
      "ProDesign is a digital product design agency specializing in UX/UI design, landing page development, and user onboarding experiences for startups and SaaS companies.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "custom theme",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://prodesign.tech/",
  },
  {
    name: "Damiens Tax",
    description:
      "Damiens Law Firm is a boutique law and accounting firm specializing in solving IRS and state tax problems for both individuals and businesses.",
    tags: [
      {
        name: "LandingPage",
        color: "blue-text-gradient",
      },
      {
        name: "responsive",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://prodesign.tech/portfolio/damiendark/",
  },
  {
    name: "knutsford",
    description:
      "Knutsford Express is a leading transportation company in Jamaica, offering intercity travel, courier services, and charter bookings.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://prodesign.tech/portfolio/knutsford/",
  },
  {
    name: "Targeted Tax Relief",
    description:
      "Targeted Tax Relief (TTR) is a U.S.-based tax resolution firm led by licensed Enrolled Agent Tracy Janssen, who has over 10 years of experience handling IRS and state tax issues. TTR offers personalized solutions for individuals, businesses, and nonprofits facing tax challenges.",
    tags: [
      {
        name: "landing page",
        color: "blue-text-gradient",
      },
      {
        name: "responsive",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://prodesign.tech/portfolio/TTR/",
  }
];

export { services, technologies, experiences, testimonials, projects };
