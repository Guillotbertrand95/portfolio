import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

const isAnalyze = process.env.ANALYZE === "true";

export default defineConfig({
	plugins: [
		react(),
		...(isAnalyze
			? [
					viteCompression(),
					visualizer({
						filename: "stats.html",
						open: true,
						gzipSize: true,
						brotliSize: true,
					}),
			  ]
			: []),
	],
});
