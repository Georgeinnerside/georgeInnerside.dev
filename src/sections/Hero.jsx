import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 hero-bg" />

      {/* Deep left-to-right gradient so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/85 to-night/20" />
      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent" />

      {/* Subtle electric orb */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[35%] top-[20%] w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(79,142,247,0.25) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-3xl">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="section-eyebrow mb-5"
        >
          Frontend Engineer · React & Next.js
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-display font-bold leading-[1.02] mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
        >
          Hi, I'm{" "}
          <span className="text-electric relative">
            Emmanuel-
            <br />
            George.
            {/* underline accent */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-1 left-0 h-[3px] w-full bg-electric/50 origin-left block"
            />
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="text-fog text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
        >
          Building scalable, high-performance applications with React & Next.js.
          Architecting systems that are fast, maintainable, and production-ready.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="flex flex-wrap gap-4"
        >
          <button className="btn-primary" onClick={() => scrollTo("resume")}>
            Resume
          </button>
          <button className="btn-outline" onClick={() => scrollTo("about")}>
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-fog"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-electric" />
        </motion.div>
      </motion.div>
    </section>
  );
}
