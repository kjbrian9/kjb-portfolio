import { getImagePath } from "../lib/imagePath";
const Projects = [
  {
    id: 1,
    name: "Clothing eshop",
    description:
      "A fully responsive demo website for an online clothing store, designed to showcase both products and brand identity. The project features dynamic product listings, detailed item pages, and a clean, modern layout optimized for mobile and desktop devices. Built with React and TypeScript for robust component architecture and maintainability, and styled with CSS to deliver a polished, brand-consistent design. Emphasis was placed on clear navigation, user-friendly interactions, and visual storytelling to reflect a real-world e-commerce experience.",
    demoLink: "https://kjbrian9.github.io/clothing-eshop/",
    gitHubLink: "https://github.com/kjbrian9/clothing-eshop",
    image: getImagePath("/ClothingEshop.png"),
    tools: ["Javacript", "Html", "React", "CSS"],
  },
  {
    id: 2,
    name: "Todo maker",
    description:
      "A fullstack todo maker webpage. The frontend is made via CSS, HTML and JavaScript, and the backend uses PHP and mySQL.",
    demoLink: "https://kjbrian9.github.io/react-final-portfolio-page/",
    gitHubLink: "https://github.com/kjbrian9/TaskManager",
    image: getImagePath("/ListFlow.png"),
    tools: ["Javascript", "React", "CSS", "mySQL", "PHP"],
  },
  {
    id: 3,
    name: "Previous portfolio website",
    description:
      "This was my previous portfolio website made with React,Typescript,CSS and with Motion framework",
    demoLink: "https://kjbrian9.github.io/react-final-portfolio-page/",
    gitHubLink: "https://github.com/kjbrian9/react-final-portfolio-page",
    image: getImagePath("/previousPortfolio.png"),
    tools: ["Typescript", "Motion", "React", "CSS"],
  },
  {
    id: 4,
    name: "Gaming eshop",
    description:
      "A fully responsive demo website for an online gaming eshop, designed to showcase products and the brand identity. The project features  detailed item pages and a  modern layout optimized for mobile and desktop devices. Built with React and TypeScript for robust component architecture and maintainability, and styled with CSS to deliver a polished, brand-consistent design. Emphasis was placed on clear navigation, user-friendly interactions, and visual storytelling.",
    demoLink: "https://kjbrian9.github.io/gaming-webapp/",
    gitHubLink: "https://github.com/kjbrian9/gaming-webapp",
    image: getImagePath("/GamingEshop.png"),
    tools: ["Typescript", "React", "CSS"],
  },
  {
    id: 5,
    name: "Bachelors thesis program",
    description:
      "My bachelors thesis program focused on gathering information about GitHub repositories and on evaluation of these information",
    demoLink: "https://kjbrian9.github.io/react-final-portfolio-page/",
    gitHubLink: "https://github.com/kjbrian9/react-final-portfolio-page",
    image: getImagePath("/bachelorsProgram.png"),
    tools: ["C#"],
  },
];
export { Projects };
