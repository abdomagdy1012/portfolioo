// import { useState } from "react";
// import { motion } from "framer-motion";

// function App() {
//   const [dark, setDark] = useState(true);
//   const projects = [
//     {
//       title: "FreshCart",
//       desc: "Full e-commerce app with cart, authentication, and API integration",
//       link: "#",
//     },
//     {
//       title: "Movie App",
//       desc: "React app for browsing movies with API and trailers",
//       link: "#",
//     },
//     {
//       title: "Amazon Clone",
//       desc: "Responsive UI with cart and product listing",
//       link: "#",
//     },
//   ];

//   return (
//     <>
//       <div
//         className={`min-h-screen transition-all duration-300 ${
//           dark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
//         }`}
//       >
//         <div className="max-w-6xl mx-auto p-6">
//           {/* Navbar */}
//           <div className="flex justify-between items-center mb-10">
//             <h1 className="text-xl font-bold">My Portfolio</h1>
//             <button
//               className="px-4 py-2 rounded bg-blue-600 text-white"
//               onClick={() => setDark(!dark)}
//             >
//               Toggle Mode
//             </button>
//           </div>

//           {/* Hero */}
//           {/* <motion.div
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-20"
//           >
//             <h1 className="text-5xl md:text-6xl font-bold mb-4">
//               Abdelrhman Magdy Abdo
//             </h1>

//             <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-4">
//               Frontend React Developer
//             </h2>

//             <p className="text-lg opacity-80 max-w-2xl mx-auto">
//               I build modern, responsive and high-performance web applications
//               using React.
//             </p>

//             <div className="mt-8 flex justify-center gap-4">
//               <button
//                 onClick={() =>
//                   document
//                     .getElementById("projects")
//                     ?.scrollIntoView({ behavior: "smooth" })
//                 }
//                 className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
//               >
//                 View Projects
//               </button>

//               <button
//                 onClick={() =>
//                   document
//                     .getElementById("contact")
//                     ?.scrollIntoView({ behavior: "smooth" })
//                 }
//                 className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition"
//               >
//                 Contact Me
//               </button>
//             </div>
//           </motion.div> */}
//           <div className="min-h-screen bg-gradient-to-br from-[#0f051d] via-[#1a0933] to-[#2a0d4d] text-white">
//             {/* Glow Effect */}
//             <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-700 opacity-20 blur-[120px] rounded-full"></div>

//             {/* Content */}
//             <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 text-center">
//               <h1 className="text-5xl md:text-6xl font-bold mb-6">
//                 Hi, I’m <span className="text-purple-400">Abdelrhman</span>
//               </h1>

//               <h2 className="text-2xl md:text-3xl text-white/80 mb-6">
//                 Frontend React Developer
//               </h2>

//               <p className="text-white/60 max-w-2xl mx-auto mb-10">
//                 I build modern, high-performance web applications with clean UI
//                 and smooth UX.
//               </p>

//               <div className="flex justify-center gap-4">
//                 <button className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition">
//                   View Projects
//                 </button>

//                 <button className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
//                   Contact Me
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* About */}
//           <section id="about" className="mt-24">
//             <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>

//             <div className="grid md:grid-cols-2 gap-10 items-center">
//               {/* Image */}
//               <div className="flex justify-center">
//                 <img
//                   src=""
//                   alt="profile"
//                   className="w-64 h-64 rounded-2xl border border-white/10 object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div>
//                 <h3 className="text-2xl font-semibold mb-4">
//                   Frontend Developer specializing in React & Modern UI
//                 </h3>

//                 <p className="text-white/70 leading-relaxed mb-4">
//                   I am a Frontend Developer focused on building scalable,
//                   responsive, and user-friendly web applications using React and
//                   modern JavaScript tools.
//                 </p>

//                 <p className="text-white/70 leading-relaxed mb-6">
//                   I care deeply about clean code, performance optimization, and
//                   creating interfaces that provide smooth user experiences
//                   across all devices.
//                 </p>

//                 {/* Key highlights */}
//                 <div className="space-y-2 text-white/80 mb-6">
//                   <p>✔ Building responsive React applications</p>
//                   <p>✔ Strong focus on UI/UX and performance</p>
//                   <p>✔ Experience with component-based architecture</p>
//                 </div>

//                 {/* Skills */}
//                 <div className="flex flex-wrap gap-3">
//                   <span className="px-3 py-1 bg-white/10 rounded-lg text-sm">
//                     HTML
//                   </span>
//                   <span className="px-3 py-1 bg-white/10 rounded-lg text-sm">
//                     CSS
//                   </span>
//                   <span className="px-3 py-1 bg-white/10 rounded-lg text-sm">
//                     JavaScript
//                   </span>
//                   <span className="px-3 py-1 bg-white/10 rounded-lg text-sm">
//                     React
//                   </span>
//                   <span className="px-3 py-1 bg-white/10 rounded-lg text-sm">
//                     Bootstrap
//                   </span>
//                   <span className="px-3 py-1 bg-white/10 rounded-lg text-sm">
//                     Tailwind CSS
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Projects */}
//           <section id="projects" className="mt-20">
//             <h2 className="text-3xl font-bold text-center mb-10">
//               My Projects
//             </h2>

//             <div className="grid md:grid-cols-3 gap-6">
//               {/* Project Card */}
//               <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition">
//                 <img
//                   src="https://via.placeholder.com/600x400"
//                   className="w-full h-40 object-cover"
//                 />

//                 <div className="p-5">
//                   <h3 className="text-xl font-semibold mb-2">E-commerce App</h3>

//                   <p className="text-sm text-white/70 mb-4">
//                     React + Firebase full e-commerce system with cart & auth.
//                   </p>

//                   <div className="flex gap-3">
//                     <a
//                       href="#"
//                       className="px-3 py-1 text-sm bg-blue-600 rounded-lg"
//                     >
//                       Live
//                     </a>

//                     <a
//                       href="#"
//                       className="px-3 py-1 text-sm border border-white/20 rounded-lg"
//                     >
//                       GitHub
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Project Card 2 */}
//               <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition">
//                 <img
//                   src="https://via.placeholder.com/600x400"
//                   className="w-full h-40 object-cover"
//                 />

//                 <div className="p-5">
//                   <h3 className="text-xl font-semibold mb-2">
//                     Portfolio Website
//                   </h3>

//                   <p className="text-sm text-white/70 mb-4">
//                     Modern responsive portfolio with animations and dark mode.
//                   </p>

//                   <div className="flex gap-3">
//                     <a className="px-3 py-1 text-sm bg-blue-600 rounded-lg">
//                       Live
//                     </a>
//                     <a className="px-3 py-1 text-sm border border-white/20 rounded-lg">
//                       GitHub
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Project Card 3 */}
//               <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition">
//                 <img
//                   src="https://via.placeholder.com/600x400"
//                   className="w-full h-40 object-cover"
//                 />

//                 <div className="p-5">
//                   <h3 className="text-xl font-semibold mb-2">Dashboard UI</h3>

//                   <p className="text-sm text-white/70 mb-4">
//                     Admin dashboard with charts and analytics layout.
//                   </p>

//                   <div className="flex gap-3">
//                     <a className="px-3 py-1 text-sm bg-blue-600 rounded-lg">
//                       Live
//                     </a>
//                     <a className="px-3 py-1 text-sm border border-white/20 rounded-lg">
//                       GitHub
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/*Contact*/}
//           <section id="contact" className="mt-24 mb-20">
//             <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

//             <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
//               <p className="text-white/70 mb-6"></p>

//               {/* Email Button */}
//               <a
//                 href="abdomagdy"
//                 className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition mb-6"
//               >
//                 Send Email
//               </a>

//               {/* Social Links */}
//               <div className="flex justify-center gap-4 mt-6">
//                 <a
//                   href="https://github.com/abdomagdy1012?tab=repositories"
//                   target="_blank"
//                   className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
//                 >
//                   GitHub
//                 </a>

//                 <a
//                   href="https://www.linkedin.com/in/abdelrhman-magdy-5747b3193/"
//                   target="_blank"
//                   className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
//                 >
//                   LinkedIn
//                 </a>

//                 <a
//                   href="/AbdelrhmanMagdyCV.pdf"
//                   className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
//                 >
//                   CV
//                 </a>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </>
//   );
// }


//نسخة تانية


import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0118] text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f051d] via-[#1a0933] to-[#2a0d4d]"></div>
      <div className="absolute top-[-150px] left-[20%] w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[150px] rounded-full"></div>

      <div className="relative z-10">
        <NavBar />
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
}
