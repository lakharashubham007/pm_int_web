export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#87CEEB",
        accent: {
          red: "#EF4444",
          yellow: "#FACC15",
          green: "#22C55E",
          purple: "#8B5CF6",
        },
        background: "#EAF6FF",
      },
    },
  },
  plugins: [],
};
