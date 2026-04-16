import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const values = [
  "Clean Code",
  "Attention to Detail",
  "Fast UIs",
  "Problem Solver",
  "Team Player",
];

export default function About() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production wire this to EmailJS / Formspree / a backend
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="about" className="py-32 px-8 md:px-16 lg:px-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 70% 60%, #E8A87C0A 0%, transparent 70%)",
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
          <span className="section-eyebrow">03</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ghost">
            About
          </h2>
          <div className="flex-1 h-px bg-white/5 ml-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Avatar initials */}
            <div className="mb-8">
              <motion.div
                whileHover={{ rotate: 5 }}
                className="inline-flex w-20 h-20 rounded-2xl items-center justify-center font-display text-2xl font-bold text-electric"
                style={{
                  background:
                    "conic-gradient(from 130deg, #4F8EF7B3, #E8A87C80, #4F8EF7B3)",
                  padding: 2,
                }}
              >
                <div className="w-full h-full rounded-2xl bg-night flex items-center justify-center">
                  EGB
                </div>
              </motion.div>
            </div>

            <h3 className="font-display text-2xl font-bold text-ghost mb-5">
              Emmanuel-George Bassey
            </h3>

            <div className="space-y-4 text-fog text-sm leading-loose">
              <p>
                I'm a Frontend Engineer focused on building{" "}
                <span className="text-electric font-semibold">
                  scalable, high-performance applications
                </span>{" "}
                with React and Next.js — writing code that's built to last, not
                just to ship.
              </p>
              <p>
                I'm experienced in architecting maintainable systems,
                integrating APIs, and delivering production-ready user
                experiences that are fast, accessible, and polished from the
                first pixel to the last interaction.
              </p>
              <p>
                When I'm not engineering interfaces, I'm exploring new frontend
                patterns, studying system design, and looking for the next
                problem worth solving.
              </p>
            </div>

            {/* Values chips */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              {values.map((v) => (
                <span
                  key={v}
                  className="text-[11px] px-3 py-1.5 rounded-full border border-white/8 text-fog/70"
                >
                  {v}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3 className="font-display text-xl font-bold text-ghost mb-6">
              Get in Touch
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] tracking-widest uppercase text-fog/50 font-semibold block mb-2">
                    Name
                  </label>
                  <input
                    className="form-input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-[11px] tracking-widest uppercase text-fog/50 font-semibold block mb-2">
                    Email
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] tracking-widest uppercase text-fog/50 font-semibold block mb-2">
                  Message
                </label>
                <textarea
                  className="form-input"
                  rows={5}
                  placeholder="Tell me about your project..."
                  style={{ resize: "vertical" }}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>

              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary w-full justify-center"
              >
                {sent ? (
                  <>
                    <CheckCircle size={15} /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={14} /> Send Message
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
