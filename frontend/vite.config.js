import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
import svgr from "vite-plugin-svgr"; // Importe le plugin svgr

const isAnalyze = process.env.ANALYZE === "true";

export default defineConfig({
	plugins: [
		react(),
		svgr(), // Ajoute le plugin svgr ici
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
