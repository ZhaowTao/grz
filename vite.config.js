import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages 项目站部署在子路径 /grz/ 下，必须设置 base 否则资源 404
  base: "/grz/",
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
});
