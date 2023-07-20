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
        principal: "url('/src/assets/oficina1.jpg')",
        fondoLogin: "url('/src/assets/fondoLogin.jpg')"
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
