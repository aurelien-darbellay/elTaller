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
    allowedHosts: ["29609a2a4120.ngrok-free.app"],
  },
});
