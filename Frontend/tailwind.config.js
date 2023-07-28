/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azulOscuro: "#2A3E59",
        azulClaro: "#A4AEBE",
        gris: "#D9D9D9",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        oficina1: "url('/src/assets/oficina1.jpg')",
        oficina2: "url('/src/assets/oficina2.jpg')",
        oficina3: "url('/src/assets/oficina3.jpg')",
        oficina4: "url('/src/assets/oficina4.jpg')",
        oficina5: "url('/src/assets/oficina5.jpg')",
        oficionaHorizontal1:  "url('/src/assets/oficinaHorizontal.jpg')",
        oficionaHorizontal2:  "url('/src/assets/oficionaHorizontal2.jpg')",
        oficionaHorizontal3:  "url('/src/assets/oficionaHorizontal3.jpg')",
        oficionaHorizontal4:  "url('/src/assets/oficionaHorizontal4.jpg')",
        oficionaHorizontal5:  "url('/src/assets/oficionaHorizontal5.jpg')",
        fondoLogin: "url('/src/assets/fondoLogin.jpg')",
        mapa: "url('/src/assets/mapa3.jpg')"
      },
      screens: {
        p: "250px",
        // => @media (min-width: 250px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        ur: "1920px",
        // => @media (min-width: 1920px) { ... }
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
