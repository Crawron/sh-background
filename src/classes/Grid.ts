import { Vector2 } from "../types"
import { simplex } from "../simplex"
import { vectorDistance } from "../helpers"

const MARGIN = 300

export class Grid {
	screenSpace: Vector2
	spacing: Vector2
	dots: Vector2[] = []

	constructor(screenSpace: Vector2, spacing: Vector2) {
		this.screenSpace = screenSpace
		this.spacing = spacing

		this.updateDots(0)
	}

	updateDots(frame: number) {
		this.dots = []
		const { dots, screenSpace, spacing } = this

		const start = { x: -MARGIN, y: -MARGIN }
		const end = { x: screenSpace.x + MARGIN, y: screenSpace.y + MARGIN }

		for (let x = start.x; x < end.x; x += spacing.x) {
			for (let y = start.y; y < end.y; y += spacing.y) {
				const offsetPos = { x, y: y + (frame % spacing.y) }
				const value = simplex.scaled2D(offsetPos.x * 20, offsetPos.y - frame)
				if (value > 0.6) dots.push(offsetPos)
			}
		}
	}

	draw(context: CanvasRenderingContext2D) {
		const { spacing, dots, warp } = this

		context.beginPath()

		for (let i = 1; i < dots.length; i++) {
			const prevDot = warp(dots[i - 1])
			const currentDot = warp(dots[i])

			const distance = vectorDistance(prevDot, currentDot)

			if (distance <= spacing.y * 1.3) {
				context.lineTo(prevDot.x, prevDot.y)
				context.lineTo(currentDot.x, currentDot.y)
			} else {
				context.stroke()
				context.beginPath()
			}
		}
		context.stroke()

		context.lineWidth = spacing.x / 2
		context.strokeStyle = "#202020"
		context.lineCap = "round"
		context.lineJoin = "round"
	}

	private warp(pos: Vector2): Vector2 {
		return {
			x: pos.x + Math.sin(1 + pos.y / 80) * 20 - pos.y / 3,
			y: pos.y
		}
	}
}
