import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import type { UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import type { InlineConfig } from "vitest";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    coverage: {
      reporter: ["lcov", "html"],
      exclude: ["**/*.spec.ts"],
    },
  },
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}) as VitestConfigExport;
