import { Vector2 } from "../types"
import { isOutsideOf } from "../helpers"

export class Stroke {
	speed = 2
	trailLength = 40

	position: Vector2
	trail: Vector2[] = []

	context: CanvasRenderingContext2D

	constructor(position: Vector2, context: CanvasRenderingContext2D) {
		this.position = position
		this.context = context
	}

	get isOutOfCanvas() {
		const { width: x, height: y } = this.context.canvas

		for (let pos of this.trail) {
			if (!isOutsideOf(pos, { x, y }, 6)) return false
		}

		return true
	}

	update() {
		const { position, speed, trail, trailLength } = this

		trail.push(position)

		this.position = {
			x: position.x,
			y: position.y + speed
		}

		if (trail.length > trailLength) {
			trail.splice(0, 1)
		}
	}

	draw() {
		if (this.isOutOfCanvas) return

		const { trail, context } = this

		context.save()

		context.beginPath()
		for (let pos of trail) {
			context.lineTo(pos.x, pos.y)
		}

		context.lineJoin = "round"
		context.lineCap = "round"
		context.lineWidth = 25
		context.strokeStyle = "white"

		context.stroke()

		context.restore()
	}
}
