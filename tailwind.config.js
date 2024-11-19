/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"], // Font size 12px with line height 16px
      sm: ["14px", "20px"], // Font size 14px with line height 20px
      base: ["16px", "19.5px"], // Font size 16px with line height 19.5px
      lg: ["18px", "21.94px"], // Font size 18px with line height 21.94px
      xl: ["20px", "24.38px"], // Font size 20px with line height 24.38px
      "2xl": ["24px", "29.26px"], // Font size 24px with line height 29.26px
      "3xl": ["28px", "50px"], // Font size 28px with line height 50px
      "4xl": ["48px", "58px"], // Font size 48px with line height 58px
      "8xl": ["96px", "106px"], // Font size 96px with line height 106px
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
