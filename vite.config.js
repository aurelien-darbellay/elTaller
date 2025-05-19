import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // <-- this is key! allows external access
    port: 5173, // or whatever port your app runs on
    strictPort: true,
    https: false, // optional, you can use true with certs
    cors: true,
    allowedHosts: ["f939-188-84-60-76.ngrok-free.app"],
  },
});
