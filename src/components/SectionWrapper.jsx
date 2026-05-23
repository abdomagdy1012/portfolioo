import { motion } from "framer-motion";

export function SectionWrapper({ children }) {
  return (
    <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 60 }}
  viewport={{ amount: 0.3, once: false }}
  transition={{ duration: 0.5 }}
>
      {children}
    </motion.div>
  );
}