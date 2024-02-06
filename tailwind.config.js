/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        smallPhone: "330px",
        iPhone: "420px",
        surfaceDuo: "540px",
        mediumpc: "912px",
      },

      backgroundColor: {
        "input-bg": "rgba(196, 196, 196, 0.25)",
      },
    },
  },
  plugins: [],
};
