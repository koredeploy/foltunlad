/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      //color settings
      colors: {

          green:{
            100: "#00A859",
            200: "#00a859a6"
          },
          orange:{
            100: "#F58634",
            200: "#f58434ab"
          },
          red: {
              100: "",
              200: "#D20000",
          },
          white: {
              100: "#FFFFFF",
              200: "#FEFFFF",
              300: "",
              400: "",
              500: "",
          },
          gray:{
            100: "#E6EFF3",
            200: "#EEF8FD",
            300: "#999EA0",
            400: "#606060",
          },
          black: {
              100: "#292929",
              200: "#000000",
              300: "",
              400: "",
              500: "#000000",
          },
      },
      //  font settings
      // fontFamily:{
      // 	"bricolage":[ "Bricolage Grotesque", "sans-serif" ],
      // 	"barlow-semi-condensed":[ "Barlow Semi Condensed", "sans-serif" ],
      // },
      //breakpoints
      screenSize: {
          sm: "480px",
          md: "768px",
          lg: "976px",
          xl: "1440px",
      },
      extend: {},
  },
  plugins: [],
};


// VARIABLES


// green



// orange
// $orange-100: ;
//red shades type

// $red-100: #FE0000;
