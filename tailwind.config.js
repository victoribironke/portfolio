/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        rrs: "365px",
        rs: "450px",
        "2xl": "1450px",
      },
      colors: {
        gray: "#999",
        blue: "#1f8fff",
      },
    },
  },
  plugins: [],
};
