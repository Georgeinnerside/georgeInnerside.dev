/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        body: ["'Cabinet Grotesk'", "sans-serif"],
      },
      colors: {
        night: "#07070b",
        carbon: "#0e0e15",
        mist: "#13131d",
        electric: "#4f8ef7",
        glow: "#6ea8ff",
        ember: "#e8a87c",
        fog: "#9090b0",
        ghost: "#c8c8e0",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "scroll-down": "scrollDown 2s ease infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        scrollDown: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(16px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
