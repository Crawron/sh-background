import { Stroke, Grid } from "./classes"
import { maximizeCanvas } from "./helpers"

// Canvas and conext
const canvas = document.createElement("canvas")
const context = canvas.getContext("2d", { alpha: false }) as CanvasRenderingContext2D

let grid: Grid

function init() {
	// Set canvas size
	maximizeCanvas(canvas)
	document.body.appendChild(canvas)

	grid = new Grid({ x: canvas.width, y: canvas.height }, { x: 20, y: 20 })

	window.addEventListener("resize", () => {
		grid.screenSpace = { x: canvas.width, y: canvas.height }
		maximizeCanvas(canvas)
	})

	animate()
}

function update(frame: number) {
	grid.updateDots()
}

function draw(frame: number) {
	context.fillStyle = "#161616"
	context.fillRect(0, 0, canvas.width, canvas.height)

	grid.draw(context)
}

function animate() {
	const frame = requestAnimationFrame(animate)

	update(frame)
	draw(frame)
}

if (context) init()
