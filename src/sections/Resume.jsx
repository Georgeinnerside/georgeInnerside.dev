import { motion } from "framer-motion";
import { Download, Briefcase, Code2 } from "lucide-react";

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "TanStack Query",
  "Zustand",
  "REST APIs",
  "JWT & Auth",
  "NextAuth.js",
  "Git & GitHub",
  "Framer Motion",
  "Performance Opt.",
  "Responsive Design",
];

const experience = [
  {
    period: "2024 – 2025",
    role: "Frontend Engineer",
    company: "Cliq Power",
  },
  {
    period: "2025 – 2025",
    role: "Frontend Developer",
    company: "Isentry",
  },
  {
    period: "2025 – 2026",
    role: "Frontend Developer",
    company: "Isentry",
  },
];

function TimelineItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative pl-8 border-l border-white/8"
    >
      {/* Dot */}
      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-electric shadow-[0_0_10px_rgba(79,142,247,0.6)]" />

      <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-electric/70">
        {item.period}
      </span>
      <h4 className="font-display text-xl font-bold text-ghost mt-1 mb-0.5">
        {item.role}
      </h4>
      <p className="text-xs text-fog/60 mb-3 font-medium">{item.company}</p>
      <p className="text-sm text-fog leading-relaxed">{item.desc}</p>
    </motion.div>
  );
}

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-32 px-8 md:px-16 lg:px-24 relative"
      style={{ background: "#FFFFFF04" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 80% at 20% 50%, #4F8EF70A 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-baseline gap-5 mb-16"
        >
          <span className="section-eyebrow">02</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ghost">
            Resume
          </h2>
          <div className="flex-1 h-px bg-white/5 ml-4" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-16 items-start">
          {/* Left: Skills + Experience */}
          <div>
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <div className="flex items-center gap-3 mb-6">
                <Code2 size={15} className="text-electric" />
                <span className="text-xs tracking-[0.25em] uppercase font-bold text-electric/70">
                  Technical Skills
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    className="skill-pill"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase size={15} className="text-electric" />
                <span className="text-xs tracking-[0.25em] uppercase font-bold text-electric/70">
                  Experience
                </span>
              </div>
              <div className="flex flex-col gap-10">
                {experience.map((item, i) => (
                  <TimelineItem key={i} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Download card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="sticky top-28"
          >
            <div
              className="rounded-xl p-8 border"
              style={{
                background: "#4F8EF70F",
                borderColor: "#4F8EF72E",
              }}
            >
              {/* Glow dot */}
              <div className="w-10 h-10 rounded-full bg-electric/15 flex items-center justify-center mb-6">
                <Download size={18} className="text-electric" />
              </div>
              <h3 className="font-display text-xl font-bold text-ghost mb-3">
                Full Résumé
              </h3>
              <p className="text-sm text-fog leading-relaxed mb-7">
                Get the complete picture — work history, education, and
                technical depth in one document.
              </p>
              <a
                href="#"
                download
                onClick={(e) => e.preventDefault()}
                className="btn-primary w-full justify-center"
              >
                <Download size={14} /> Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="w-full gap-3 mt-4">
              <div className="rounded-lg p-5 border border-white/5 bg-white/[0.02] text-center">
                <p className="font-display text-2xl font-bold text-electric mb-1">
                  3+
                </p>
                <p className="text-[11px] text-fog/60 leading-snug">
                  Years Building
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
