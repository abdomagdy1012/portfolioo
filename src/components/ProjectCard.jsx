import { motion, useMotionValue, useSpring } from "framer-motion";

export default function ProjectCard({ project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (e.clientX - rect.left - centerX) / 10;
    const moveY = (e.clientY - rect.top - centerY) / 10;

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={(e) => window.innerWidth > 768 && handleMouseMove(e)}
      onMouseLeave={handleMouseLeave}
      className="relative group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-lg shadow-lg hover:shadow-purple-500/20 transition"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
  src={project.image}
  className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
/>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-white/60 text-sm mt-2">{project.desc}</p>
      </div>

      {/*Live and links*/}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-purple-600 rounded-lg text-sm hover:scale-105 transition"
        >
          Live
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 border border-white/30 rounded-lg text-sm hover:scale-105 transition"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
}
