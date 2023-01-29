import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhos:3000",
  integrations: [react()]
});