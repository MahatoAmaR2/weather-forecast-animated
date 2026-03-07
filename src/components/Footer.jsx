import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        mt-16
        py-6
        text-center
        border-t
        border-slate-200
        dark:border-slate-700
        bg-white/60
        dark:bg-slate-900/60
        backdrop-blur-md
      "
    >
      <p className="text-sm text-slate-700 dark:text-slate-300 text-center">
        © {year} Designed by{" "}
        <span className="font-bold text-xl text-yellow-500">Amar Mahato</span>.
        All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
