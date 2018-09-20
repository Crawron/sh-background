import typescript from "rollup-plugin-typescript2"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import progress from "rollup-plugin-progress"
import serve from "rollup-plugin-serve"
import html from "rollup-plugin-generate-html-template"

export default {
	input: "./src/main.ts",
	output: {
		file: "./dist/main.js",
		format: "iife",
		sourcemap: true
	},
	plugins: [
		progress(), //
		resolve({ three: true }),
		commonjs(),
		typescript({
			clean: true,
			rollupCommonJSResolveHack: true
		}),
		html({
			template: "src/template.html",
			target: "index.html"
		}),
		serve("dist")
	]
}
