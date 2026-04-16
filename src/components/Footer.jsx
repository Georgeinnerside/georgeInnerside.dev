import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaMailBulk } from "react-icons/fa";

const socials = [
  {
    label: "LinkedIn",
    logo: <FaLinkedin />,
    href: "https://linkedin.com/georgeinnerside",
  },
  {
    label: "GitHub",
    logo: <FaGithub />,
    href: "https://github.com/georgebassey",
  },
  {
    label: "Twitter / X",
    logo: <FaTwitter />,
    href: "https://twitter.com",
  },
  {
    label: "Email",
    logo: <FaMailBulk />,
    href: "mailto:hello@emmanuel-george.dev",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] py-12 px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-7">
        {/* Logo */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-xl font-bold text-electric tracking-[0.2em]"
        >
          EGB
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              title={s.label}
              whileHover={{ scale: 1.1, borderColor: "rgba(79,142,247,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-fog hover:text-electric transition-colors text-xs font-bold"
            >
              {s.logo}
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <hr className="hr-glow w-full" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center">
          <p className="text-[11px] text-fog/40 tracking-widest uppercase">
            © {new Date().getFullYear()} Emmanuel-George Bassey
          </p>
          <span className="hidden sm:block text-fog/20">·</span>
          <p className="text-[11px] text-fog/30 tracking-widest uppercase">
            Built with React · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
