import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site:
    process.env.NODE_ENV !== "development"
      ? "https://mauriciosoares.github.io"
      : undefined,
  base: process.env.NODE_ENV !== "development" ? "/speakidiomas" : undefined,
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
