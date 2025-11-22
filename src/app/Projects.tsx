import { getImagePath } from "../lib/imagePath";
const Projects = [
  {
    id: 1,
    name: "Wedding page",
    description:
      "I designed and built a personalized wedding website for a private client. The goal was to create an elegant and intuitive digital space where guests could easily access important details about the event. Every detail from color palette and typography to layout and content hierarchy was planned in collaboration with the couple to match the theme and tone of their wedding. Throughout development, I provided previews and iterated based on feedback to ensure the final result perfectly reflected their vision. Every image and link was changed to protect the couple's privacy.",
    demoLink: "https://wedding-page-portfolio-version.vercel.app/",
    gitHubLink: "https://github.com/kjbrian9/Wedding-Page-Portfolio-Version",
    image: getImagePath("/WeddingPage.png"),
    tools: ["Javacript", "Html", "React", "CSS", "Next.js"],
  },
  {
    id: 2,
    name: "Clothing eshop",
    description:
      "A fully responsive demo website for an online clothing store, designed to showcase both products and brand identity. The project features dynamic product listings, detailed item pages, and a clean, modern layout optimized for mobile and desktop devices. Built with React and TypeScript for robust component architecture and maintainability, and styled with CSS to deliver a polished, brand-consistent design. Emphasis was placed on clear navigation, user-friendly interactions, and visual storytelling to reflect a real-world e-commerce experience.",
    demoLink: "https://kjbrian9.github.io/clothing-eshop/",
    gitHubLink: "https://github.com/kjbrian9/clothing-eshop",
    image: getImagePath("/ClothingEshop.png"),
    tools: ["Javacript", "Html", "React", "CSS"],
  },

  {
    id: 3,
    name: "Todo maker",
    description:
      "A fullstack todo maker webpage. The frontend is made via CSS, HTML and JavaScript, and the backend uses PHP and mySQL.",
    demoLink: "https://kjbrian9.github.io/react-final-portfolio-page/",
    gitHubLink: "https://github.com/kjbrian9/TaskManager",
    image: getImagePath("/ListFlow.png"),
    tools: ["Javascript", "React", "CSS", "mySQL", "PHP"],
  },
  {
    id: 4,
    name: "Previous portfolio website",
    description:
      "This was my previous portfolio website made with React,Typescript,CSS and with Motion framework",
    demoLink: "https://kjbrian9.github.io/react-final-portfolio-page/",
    gitHubLink: "https://github.com/kjbrian9/react-final-portfolio-page",
    image: getImagePath("/previousPortfolio.png"),
    tools: ["Typescript", "Motion", "React", "CSS"],
  },
  {
    id: 5,
    name: "Gaming eshop",
    description:
      "A fully responsive demo website for an online gaming eshop, designed to showcase products and the brand identity. The project features  detailed item pages and a  modern layout optimized for mobile and desktop devices. Built with React and TypeScript for robust component architecture and maintainability, and styled with CSS to deliver a polished, brand-consistent design. Emphasis was placed on clear navigation, user-friendly interactions, and visual storytelling.",
    demoLink: "https://kjbrian9.github.io/gaming-webapp/",
    gitHubLink: "https://github.com/kjbrian9/gaming-webapp",
    image: getImagePath("/GamingEshop.png"),
    tools: ["Typescript", "React", "CSS"],
  },
  {
    id: 6,
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
