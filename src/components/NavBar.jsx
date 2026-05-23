import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  const [active, setActive] = useState("home");

  const links = ["home", "about", "projects", "contact"];

  useEffect(() => {
    const sections = links.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.6, // لما 60% من section يظهر
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="font-bold">
          My<span className="text-purple-400">Portfolio</span>
        </h1>

        {/* Links */}
        <div className="flex gap-6">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="relative text-sm capitalize text-white/70 hover:text-white transition"
            >
              {link}

              {/* Active underline */}
              {active === link && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-purple-400"
                />
              )}
            </button>
          ))}
        </div>

      </div>
    </motion.nav>
  );
}