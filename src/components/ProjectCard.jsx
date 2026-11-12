import { motion, useMotionValue, useSpring } from "framer-motion";

export default function ProjectCard({ project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    // only run the tilt effect on desktop-sized screens (checked at event time, not render time)
    if (window.innerWidth <= 768) return;

    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / 10);
    y.set((e.clientY - rect.top - rect.height / 2) / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Buttons = ({ className = "" }) => (
    <div className={`flex items-center gap-3 ${className}`}>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-purple-600 rounded-lg text-sm hover:scale-105 transition"
        >
          Live
        </a>
      )}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 border border-white/30 rounded-lg text-sm hover:scale-105 transition"
      >
        GitHub
      </a>
    </div>
  );

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-lg shadow-lg hover:shadow-purple-500/20 transition"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-44 sm:h-48 object-cover object-top transition duration-300 md:group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-white/60 text-sm mt-2">{project.desc}</p>

        {/* Mobile: always-visible buttons */}
        <Buttons className="mt-4 md:hidden" />
      </div>

      {/* Desktop: hover overlay */}
      <div className="hidden md:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition items-center justify-center">
        <Buttons />
      </div>
    </motion.div>
  );
}