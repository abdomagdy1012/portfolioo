import ProjectCard from "./ProjectCard";
import { SectionWrapper } from "./SectionWrapper";

const projects = [
  {
    title: "Amazon Website",
    desc: `Developed a responsive e-commerce web application inspired by Amazon using modern front-end technologies.
        Implemented product listing, cart system, and state management with dynamic UI updates.
        Focused on clean design, user experience, and scalable component-based architecture.`,
    image: "images/Amazon/checkout.png",
    live: "https://amazonproject-lyart.vercel.app/",
    github: "https://github.com/abdomagdy1012/Amazon-Project",
  },
  {
    title: "Bird Game",
    desc: `Built an interactive browser-based game using vanilla JavaScript with dynamic object generation and collision logic.
    Implemented scoring system, timer, and moving obstacles (birds and bombs) using DOM manipulation and setInterval.
            Focused on game mechanics, responsiveness, and real-time user interaction.`,
    image: "images/BirdGame/start.PNG",
    live: "https://birdgame-kappa.vercel.app/",
    github: "https://github.com/abdomagdy1012/BirdGame",
  },
   {
    title: "Movies Website",
    desc: `Built a responsive single-page movie browsing app using Angular CLI with REST API integration.
    Implemented routing, reusable components, and dynamic search and details views.
    Focused on clean UI, performance, and modular TypeScript architecture.`,
    image: "images/Moviesite/HomePage.PNG",
    live: "https://movie-site-six-teal.vercel.app/  ",
    github: "https://github.com/abdomagdy1012/MovieSite",
  },
   {
    title: "FreshCart Website",
    desc: `Built a responsive e-commerce web application using React with dynamic product listing and cart functionality.
      Integrated REST APIs for real-time data handling and managed state using React hooks.
      Focused on reusable components, performance optimization, and clean UI/UX design.`,
    image: "images/FreshCartimages/Wallpaper.png",
    github: "https://github.com/abdomagdy1012/FreshCart",
  },
  {
    title: "Food-Ordering Website",
    desc: `A responsive web application that allows users to browse restaurants, view menus, and place food orders seamlessly.
        Integrated REST APIs for dynamic data handling with features like authentication, cart management, and order processing.
        Built with a modular architecture focusing on performance, usability, and clean UI/UX design.`,
    image: "images/foodordering/login.PNG",
    github: "https://github.com/Mohamedkh30/FoodOrderSystemAPI",
  },
  {
    title: "WareHouse Project",
    desc: `A warehouse management system developed using C# and SQL Server for managing inventory, 
    products, stock movement, and warehouse operations. The system helps track stock levels, organize products,
     and improve inventory management efficiency..`,
    image: "images/warehouse/warehouse.png",
    github: "https://github.com/abdomagdy1012/MovieSite",
  },

];

export default function Projects() {
  return (
    <SectionWrapper>
    <section id="projects" className="px-6 py-24 max-w-6xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </section>
    </SectionWrapper>
  );
}
