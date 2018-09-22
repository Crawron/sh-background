import typescript from "rollup-plugin-typescript2"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import progress from "rollup-plugin-progress"
import serve from "rollup-plugin-serve"
import html from "rollup-plugin-generate-html-template"
import copy from "rollup-plugin-copy"

export default {
	input: "./src/main.ts",
	output: {
		file: "./dist/main.js",
		format: "iife",
		sourcemap: true,
		globals: {
			"ccapture.js": "CCapture"
		}
	},
	external: ["ccapture.js"],
	plugins: [
		progress(), //
		resolve(),
		commonjs(),
		typescript({
			clean: true,
			rollupCommonJSResolveHack: true
		}),
		copy({
			"node_modules/ccapture.js/build/CCapture.all.min.js": "dist/CCapture.all.min.js"
		}),
		html({
			template: "src/template.html",
			target: "index.html"
		}),
		serve("dist")
	]
}
