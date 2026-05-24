import { motion, useMotionValue, useSpring } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";

function MagneticCard({ title, desc, icon }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 12 });
  const springY = useSpring(y, { stiffness: 120, damping: 12 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX = (e.clientX - rect.left - rect.width / 2) / 8;
    const offsetY = (e.clientY - rect.top - rect.height / 2) / 8;

    x.set(offsetX);
    y.set(offsetY);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-lg transition hover:shadow-purple-500/20"
    >
      {/* Icon */}
      <motion.div style={{ x: springX, y: springY }} className="text-2xl mb-3">
        {icon}
      </motion.div>

      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-white/60 text-sm">{desc}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <SectionWrapper>
      <section id="about" className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="text-white/70 leading-relaxed">
            <p className="mb-4">
              I’m a frontend developer focused on crafting web experiences that
              feel fast, smooth, and alive.
            </p>
            <p className="mb-4">
              I don’t just build UI — I refine interactions, optimize
              performance, and care about the small details that users don’t
              notice consciously but always feel.
            </p>
            <p>
              I aim to create interactive digital experiences that feel fast,
              intuitive, and alive.
            </p>
          </div>

          {/* Magnetic Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <MagneticCard
              icon="⚡"
              title="Frontend Core"
              desc="HTML5, CSS3, JavaScript (ES6+), TypeScript, React , Angular"
            />

            <MagneticCard
              icon="🎨"
              title="UI & Styling"
              desc="Tailwind CSS, Bootstrap, Responsive Design, Font Awesome"
            />

            <MagneticCard
              icon="🔗"
              title="APIs & Data"
              desc="REST APIs, Web APIs, AJAX, JSON, Postman"
            />

            <MagneticCard
              icon="🧠"
              title="Architecture"
              desc="MVC Pattern, OOP, React Context API"
            />

            <MagneticCard
              icon="🚀"
              title="Tools & Deployment"
              desc="Git & GitHub, Web Hosting, API Testing"
            />

            <MagneticCard
              icon="⚙️"
              title="Mindset"
              desc="Clean code, performance, scalable UI"
            />
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
