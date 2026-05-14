import { motion } from "framer-motion";
import { ArrowUp, Briefcase, Mail } from "lucide-react";

import { useState } from "react";
import { SectionWrapper } from "./SectionWrapper";


function ContactCard({ icon, title, value, link, copy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!copy) return;
    navigator.clipboard.writeText(copy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <motion.a
      href={link}
      whileHover={{ scale: 1.05 }}
      className="relative group bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-lg overflow-hidden transition"
    >

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
        style={{
          background:
            "radial-gradient(circle at center, rgba(168,85,247,0.25), transparent 60%)",
        }}
      />

      <div className="relative z-10">
        <div className="text-2xl mb-2">{icon}</div>

        <h3 className="font-semibold">{title}</h3>
        <p className="text-white/60 text-sm mt-1">{value}</p>

        {copy && (
          <button
            onClick={(e) => {
              e.preventDefault();
              handleCopy();
            }}
            className="mt-3 text-xs px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-lg hover:bg-purple-500/30 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
      </div>

    </motion.a>
  );
}

export default function Contact() {
  return (
    <SectionWrapper>
    <section id="contact" className="px-6 py-24 max-w-5xl mx-auto text-center">

      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Get In Touch
      </h2>

      <p className="text-white/60 mb-12">
        Feel free to reach out — I'm open to opportunities 🚀
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <ContactCard
          icon="📧"
          title="Email"
          target="_blank"
          rel="noopener noreferrer"
          value="abdomagdy888.aa@gmail.com"
          copy="mailto:abdomagdy888.aa@email.com"
        />

        <ContactCard
          icon="💻"
          title="GitHub"
          value="My Projects"
          target="_blank"
          rel="noopener noreferrer"
          link="https://github.com/abdomagdy1012?tab=repositories"
        />

        <ContactCard
          icon="🔗"
          title="LinkedIn"
          value="Connect with me"
          target="_blank"
          rel="noopener noreferrer"
          link="https://www.linkedin.com/in/abdelrhman-magdy-5747b3193/ "
        />
      </div>

      {/* Floating Dock */}
       <div className="flex justify-center">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex gap-5 rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-lg"
      >
        <a
          href="#home"
          className="transition hover:scale-125 hover:text-blue-400"
        >
          <ArrowUp size={22} />
        </a>

        <a
          href="/AbdelrhmanMagdyCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:scale-125 hover:text-green-400"
        >
          <Briefcase size={22} />
        </a>

        <a
          href="mailto:abdomagdy888.aa@email.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:scale-125 hover:text-red-400"
        >
          <Mail size={22} />
        </a>
      </motion.div>
    </div>

    </section>
    </SectionWrapper>
  );
}