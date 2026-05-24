import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold"
      >
        <div className="text-center flex flex-col items-center gap-3">

  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
    Abdelrhman Magdy Abdo
  </h1>

  <p className="text-purple-400 text-xl md:text-3xl font-semibold">
    FrontEnd Developer
  </p>

</div>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-white/60 mt-4 max-w-xl"
      >
        Frontend Developer specializing in Angular & React, building modern, responsive, 
        and animated web applications using TypeScript, JavaScript, HTML, CSS, and REST API integration..
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex gap-4 mt-8"
      >
        <a
          href="#projects"
          className="px-5 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition hover:scale-105 active:scale-95"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-5 py-2 border border-white/20 hover:border-white/40 rounded-lg transition hover:scale-105 active:scale-95"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
