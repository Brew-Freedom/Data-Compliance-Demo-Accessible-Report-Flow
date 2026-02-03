import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Brew-Freedom/", // 👈 MUST MATCH REPO NAME EXACTLY
});
