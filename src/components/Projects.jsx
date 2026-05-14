// import { motion } from "framer-motion";

// export default function Projects() {
//   return (
//     <section id="projects" className="px-6 pb-20 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

//       <div className="grid md:grid-cols-3 gap-6">

//         <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:shadow-purple-500/20 transition-all duration-300 ease-out"
//             >
//           {/* Image */}
//           <div className="relative overflow-hidden">
//             <img
//               src="/project.png"
//               className="w-full h-40 object-cover group-hover:scale-110 transition duration-500"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
//               <a className="px-3 py-1 bg-purple-600 rounded-lg text-sm">Live</a>
//               <a className="px-3 py-1 border border-white/20 rounded-lg text-sm">GitHub</a>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="p-5">
//             <h3 className="text-xl font-semibold mb-2">
//               E-commerce App
//             </h3>

//             <p className="text-white/60 text-sm">
//               React app with authentication, cart and API integration.
//             </p>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }
import ProjectCard from "./ProjectCard";
import { SectionWrapper } from "./SectionWrapper";

const projects = [
  {
    title: "FreshCart Website",
    desc: "Full-featured React e-commerce application with secure authentication (register/login), cart management, and a complete checkout flow.",
    image: "images/FreshCartimages/Wallpaper.png",
    live: "https://your-live-site.com",
    github: "https://github.com/abdomagdy1012/FreshCart",
  },
  {
    title: "Amazon Website",
    desc: "A responsive Amazon-inspired e-commerce website built with HTML, CSS, and JavaScript, designed to replicate real-world shopping UI and user experience.",
    image: "/project2.png",
    live: "https://your-live-site.com",
    github: "https://github.com/abdomagdy1012/Amazon-Project",
  },
  {
    title: "Bird Game",
    desc: "Modern animated portfolio built with React & Tailwind.",
    image: "/project3.png",
    live: "https://birdgame-kappa.vercel.app/",
    github: "https://github.com/abdomagdy1012/BirdGame",
  },
];

export default function Projects() {
  return (
    <SectionWrapper>
    <section id="projects" className="px-6 py-24 max-w-6xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </section>
    </SectionWrapper>
  );
}
