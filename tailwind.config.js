/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      backgroundImage: {
        "work-with-alphy-bg":
          'url("https://res.cloudinary.com/jhay/image/upload/v1673368730/vectrus/man-sitting-down-office-job-interview-desk-with-his-employers_icogtb.jpg")',
        "our-values":
          "url('https://res.cloudinary.com/jhay/image/upload/v1673369638/vectrus/aerial-view-business-team_sw22qc.jpg')",
      },
    },
  },

  plugins: [],
};
