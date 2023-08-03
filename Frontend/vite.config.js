import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      mode: "development",
      base: "/",
      workbox: {
        globPatterns: ["**/*"],
      },
      includeAssets: ["**/*"],
      manifest: {
        background_color: "#ffffff",
        categories: ["business", "finance", "navigation"],
        description: "Aplicación para la renta de espacios de trabajo",
        dir: "ltr",
        display_override: ["standalone", "fullscreen"],
        display: "standalone",
        icons: [
          {
            src: "/src/assets/logo.png",
            sizes: "256x250",
            types: "",
            purpose: "any maskable"
          },
        ],
        lang: "es-VE",
        name: "FlexWork",
        orientation: "any",
        prefer_related_applications: false,
        scope: "/",
        start_url: "/",
      },
    })
  ],
})
