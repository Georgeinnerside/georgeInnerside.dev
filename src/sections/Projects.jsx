import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Bookify",
    tag: "Book Discovery Platform",
    year: "2024",
    stack: ["Next.js", "NextAuth", "JWT", "REST API", "Tailwind CSS"],
    description:
      "A Next.js-based book discovery platform integrating external APIs to deliver trending, categorized, and searchable book content. Features dynamic search by title, author, or ISBN, wishlist & cart functionality, and secure user authentication.",
    challenge:
      "Solves the problem of fragmented book discovery by providing a fast, centralized interface for exploring and managing books — demonstrating scalable architecture and modern frontend engineering.",
    accent: "#4f8ef7",
    index: "01",
  },
  {
    id: 2,
    title: "Yves Furniture",
    tag: "E-Commerce Storefront",
    year: "2024",
    stack: ["Next.js", "Tailwind CSS", "Sanity CMS", "Stripe"],
    description:
      "A premium furniture e-commerce storefront delivering a curated shopping experience with smooth product filtering, cart management, a polished checkout flow, and a headless CMS-driven content layer.",
    challenge:
      "Bridges the gap between high-end furniture aesthetics and poor online shopping UX — bringing a luxury retail experience to the modern web with performance-first engineering.",
    accent: "#e8a87c",
    index: "02",
  },
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="project-card rounded-xl overflow-hidden border"
      style={{
        borderColor: hovered ? project.accent + "55" : "rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.025)",
      }}
    >
      {/* Accent top bar */}
      <motion.div
        className="h-[3px] w-full"
        style={{ background: project.accent }}
        animate={{ scaleX: hovered ? 1 : 0.3, originX: 0 }}
        transition={{ duration: 0.4 }}
      />

      <div className="p-8 md:p-10">
        {/* Header row */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <span
              className="text-[10px] font-bold tracking-[0.3em] uppercase"
              style={{ color: project.accent }}
            >
              {project.tag}
            </span>
            <h3 className="font-display text-3xl font-bold mt-1 text-ghost">
              {project.title}
            </h3>
          </div>
          <span
            className="font-display text-5xl font-bold opacity-10 leading-none"
            style={{ color: project.accent }}
          >
            {project.index}
          </span>
        </div>

        {/* Description */}
        <p className="text-fog text-sm leading-loose mb-3">{project.description}</p>
        <p className="text-fog/60 text-sm leading-loose italic mb-7">
          {project.challenge}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((t) => (
            <span
              key={t}
              className="text-[11px] font-semibold px-3 py-1.5 rounded-full border"
              style={{
                borderColor: project.accent + "44",
                color: project.accent,
                background: project.accent + "10",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm font-semibold transition-colors"
            style={{ color: project.accent }}
          >
            Live Demo <ExternalLink size={13} />
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm font-semibold text-fog hover:text-ghost transition-colors"
          >
            GitHub <Github size={13} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 md:px-16 lg:px-24 relative">
      {/* Background subtle gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(79,142,247,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-baseline gap-5 mb-16"
        >
          <span className="section-eyebrow">01</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ghost">
            Projects
          </h2>
          <div className="flex-1 h-px bg-white/5 ml-4" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* More projects note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-fog/50 text-sm mt-12 flex items-center justify-center gap-2"
        >
          More on{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-electric hover:text-glow transition-colors flex items-center gap-1"
          >
            GitHub <ArrowRight size={12} />
          </a>
        </motion.p>
      </div>
    </section>
  );
}
