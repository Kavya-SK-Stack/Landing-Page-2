/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#04016C",
        secondary: "#4A16BD",
        white: "#fff",
        btnclr1: "#7F56D9",
        btnclr2: "#083F9B",
        span: "#0E38CD",
        primary1: "#2E08C7",
        secondary1: "#7E08C7",
        fontclr: "#4E596B",
        fontclr1: "#324361",
        bg1: "#D9ECFF",
        bg2: "#F0F3FF",
        pg3clr: "#739FE8",
        pg4clr: "#4F18CA",
        pg51: "#4F547B",
        pg5: "#324361",
        pgbg1: "#fff",
        pgbg2: "#D9ECFF",
        pg53: "#4E596B",
        pg6bg1: "#E441FF",
        pg6bg2: "#1901F8",
        pg6bg3: "#00B3FF",
        lineclr: "#ffffff",
        boxclr: "#0E38CD",
        cardtx: "#7E7EAA",
        footerclr1: "#477AE3",
        footerclr2: "#931BBD",
        foootreclr3: "#000000",
        footerbox1: "#0351AE",
        footerbox2: "#A542C8",
        pg2fontclr: "#4883FF",
      },
      fontFamily: {
        abc: ["Righteous", "serif"],
        dfg: ["Rowdies", "serif"],
        hij: ["Saira", "serif"],
      },
      boxshadow: {
        shadow: ["0 2px 10px rgba(0, 0, 0, 0.1)"],
      },
    },
  },
  plugins: [],
};

// npx tailwindcss -i ./src/styles.css -o ./css/styles.css --watch