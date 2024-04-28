/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        karantina: ["Karantina", "system-ui"],
      },
      colors: {
        primarybg: "#33373E",
        secondarybg: "#20232A",
        highlighter: "#04C9D7",
        darkhigh: "#1A808B",
        verified: "#00C292",
        nonverified: "#FEC90F",
        copper: "#FB9678",
        grayish: "#757575",
        perfectGrey: "#D8D8DB",
        dropDown: "#42464D",
      },
    },
  },
  plugins: [],
};
