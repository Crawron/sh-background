import { Grid } from "./classes"
import { maximizeCanvas } from "./helpers"

import { capturer } from "./capturer"

// Canvas and conext
const canvas = document.createElement("canvas")
const context = canvas.getContext("2d", { alpha: false }) as CanvasRenderingContext2D

let grid: Grid

const startTime = Date.now()

function init() {
	// Set canvas size
	maximizeCanvas(canvas)
	document.body.appendChild(canvas)

	grid = new Grid({ x: canvas.width, y: canvas.height }, { x: 100, y: 40 })
	animate()
}

function update(frame: number) {
	grid.updateDots(frame)
}

function draw() {
	context.fillStyle = "#161616"
	context.fillRect(0, 0, canvas.width, canvas.height)

	grid.draw(context)
}

function animate() {
	requestAnimationFrame(animate)
	if (capturer) capturer.capture(canvas)

	update((Date.now() - startTime) / 10)
	draw()
}

window.addEventListener("click", () => {
	console.log("click")
	capturer.toggle()
})

if (context) init()
