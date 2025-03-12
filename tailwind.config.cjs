// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths as needed
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Use Inter as the default sans-serif font
        serif: ["Merriweather", "serif"], // Custom serif font
        mono: ["Fira Code", "monospace"], // Custom monospace font
      },
    },
  },
  plugins: [],
};
