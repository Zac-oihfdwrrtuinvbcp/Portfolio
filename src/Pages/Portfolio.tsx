import { ProjectCard } from "../components/ProjectCard";
import bookiImage from "../assets/booki.webp";
import sophieBluelImage from "../assets/sophieBluel.webp";
import ninaCarducciImage from "../assets/ninaCarducci.webp";
import kasaImage from "../assets/kasa.webp";
import monVieuxGrimoireImage from "../assets/monVieuxGrimoire.webp";
import beyondTheCloudsImage from "../assets/beyondTheClouds.webp";
import outlanderFactoryImage from "../assets/outlanderFactory.webp";
import { Button } from "../components/Button";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  link: string;
  website?: string;
  tags: string[];
  image: string;
  type?: string;
}

export function Portfolio() {
  const projects: Project[] = [
    {
      title: "Mon Vieux Grimoire: Back-end for a Book Rating Website",
      description:
        'As a freelance back-end developer based in Lille, I collaborated with a senior front-end developer on the project “Mon Vieux Grimoire”, a website for referencing and rating books for a small local bookstore chain. While the front-end was developed in React, my role was to design and implement the back-end API, managing users, books, and ratings according to the technical specifications provided.\n I designed and delivered the API using Node.js/Express and MongoDB/Mongoose: implementation of the Book model (complete CRUD), secure JWT authentication with password hashing, upload management via Multer and image optimization with Sharp, rating endpoints with proper controls.',
      link: "https://github.com/Zac-oihfdwrrtuinvbcp/grimoire-backend",
      website: "https://p6-grimoire.zac-darmoise.ovh/",
      tags: ["Node.js", "Express", "MongoDB", "RESTful API"],
      image: monVieuxGrimoireImage,
      type: "Web Development",
    },
    {
      title: "Kasa: Real Estate Rental Web Application",
      description:
        "As a front-end developer, I initiated and built a real estate rental application with React (Vite + React Router stack), following responsive Figma mockups. I developed reusable components (banner, card, Slideshow with circular navigation, animated Collapse), managed state and routes, consumed JSON data while awaiting the API, and established a robust code structure. The work focused on accessibility, performance (loading, logical breakdowns), error handling, and CSS quality, with Sass for a modular and maintainable style foundation.",
      link: "https://github.com/Zac-oihfdwrrtuinvbcp/kasa-app",
      website: "https://p5-kaza.zac-darmoise.ovh/",
      tags: ["React", "React Router", "CSS Sass", "Vite"],
      image: kasaImage,
      type: "Web Development",
    },
    {
      title:
        "Nina Carducci: Debugging and Optimization of a Photographer's Website",
      description:
        "I conducted a complete audit, correction, and optimization of a professional photographer's website. The project involved performance improvements (image, code, and HTML structure optimization), SEO and local referencing implementation (meta tags, Schema.org structured data), and fixing user interface bugs. I also produced a detailed intervention report documenting the actions taken and their impact on site performance and accessibility.",
      link: "https://github.com/Zac-oihfdwrrtuinvbcp/Nina-Carducci-Dev",
      website: "https://zac-oihfdwrrtuinvbcp.github.io/Nina-Carducci-Dev/",
      tags: ["Optimization/Performance", "SEO", "Audit"],
      image: ninaCarducciImage,
      type: "Web Development",
    },
    {
      title: "Sophie Bluel Portfolio: Dynamic Javascript Web Page",
      description:
        "As a front-end developer, I participated in creating a portfolio site by working on responsive integration, JavaScript user interactions, and back-end connectivity. I developed a secure login page and a media upload modal, ensuring performance, accessibility, and code clarity.",
      link: "https://github.com/Zac-oihfdwrrtuinvbcp/Portfolio-architecte-sophie-bluel",
      website: "https://p3-sophie-bluel.zac-darmoise.ovh/",
      tags: ["JavaScript", "API Communication"],
      image: sophieBluelImage,
      type: "Web Development",
    },
    {
      title: "BOOKI: Travel Agency Homepage",
      description:
        "First project completed during my training at OpenClassrooms. This is a homepage for a fictional travel agency called 'Booki', designed using HTML and CSS. The layout is responsive, ensuring an optimal user experience across various devices.",
      link: "https://github.com/Zac-oihfdwrrtuinvbcp/booki-starter-code",
      website: "https://zac-oihfdwrrtuinvbcp.github.io/booki-starter-code/",
      tags: ["HTML", "CSS"],
      image: bookiImage,
      type: "Web Development",
    },

    {
      title: "Beyond the cloud: Unreal engine multiplayer game",
      description:
        "End of third year group project at Creajeux. Beyond the clouds is a cooperative action ( 3 players) pc game taking place into a fantastic word were everything is happening in the sky. You are controlling a flying ship and battling against collosal creatures with the help of the multiple weapons present on this ship.",
      link: "https://zacdarmoise.itch.io/beyond-the-clouds",
      tags: ["Unreal Engine", "Multiplayer", "Game Development"],
      image: beyondTheCloudsImage,
      type: "Game Development",
    },
    {
      title: "Outlander Factory: 2D Custom game engine game",
      description:
        "End of first year group project at creajeux. Game codded with a custom 2D game engine in csfml C. The game is a manager sim where you are building up a factory akin to factorio.",
      link: "https://zacdarmoise.itch.io/outlander-factory",
      tags: ["C", "CSFML", "Game Development"],
      image: outlanderFactoryImage,
      type: "Game Development",
    },
  ];

  const [currentType, setCurrentType] = useState("All");
  const filteredProjects =
    currentType === "All"
      ? projects
      : projects.filter((project) => project.type === currentType);

  return (
    <section className="space-y-8">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Zac Darmoise</h1>
        <p className="text-xl text-zinc-500">Developer Portfolio</p>
        <div className="flex justify-center gap-4 mt-6">
          <Button
            href="https://github.com/Zac-oihfdwrrtuinvbcp"
            icon="fa-brands fa-github"
          >
            GitHub
          </Button>
          <Button
            href="https://www.linkedin.com/in/zac-darmoise-058a82319/"
            icon="fa-brands fa-linkedin"
          >
            LinkedIn
          </Button>
        </div>
      </header>
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
      <div className="flex flex-wrap justify-center mb-8 gap-4">
        <Button
          onClick={() => setCurrentType("All")}
          isActive={currentType === "All"}
          disableBackground={true}
          icon="fa-solid fa-filter"
        >
          All
        </Button>
        <Button
          onClick={() => setCurrentType("Web Development")}
          isActive={currentType === "Web Development"}
          disableBackground={true}
          icon="fa-solid fa-code"
        >
          Web Development
        </Button>
        <Button
          onClick={() => setCurrentType("Game Development")}
          isActive={currentType === "Game Development"}
          disableBackground={true}
          icon="fa-solid fa-gamepad"
        >
          Game Development
        </Button>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
