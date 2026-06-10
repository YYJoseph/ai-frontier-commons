import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://YYJoseph.github.io",
  base: "/ai-frontier-commons"
});
