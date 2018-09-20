import { Vector2 } from "../types"

const MARGIN = 300

export class Grid {
	screenSpace: Vector2
	spacing: Vector2
	dots: Vector2[] = []

	constructor(screenSpace: Vector2, spacing: Vector2) {
		this.screenSpace = screenSpace
		this.spacing = spacing

		this.updateDots()
	}

	updateDots() {
		this.dots = []
		const { dots, screenSpace, spacing, warp } = this

		const start = { x: -MARGIN, y: -MARGIN }
		const end = { x: screenSpace.x + MARGIN, y: screenSpace.y + MARGIN }

		for (let x = start.x; x < end.x; x += spacing.x) {
			for (let y = start.y; y < end.y; y += spacing.y) {
				const warpedPos = warp({ x, y })

				dots.push(warpedPos)
			}
		}
	}

	draw(context: CanvasRenderingContext2D) {
		const { spacing, dots } = this

		for (let dot of dots) {
			context.fillStyle = "white"
			context.fillRect(dot.x, dot.y, spacing.x / 2, spacing.y / 2)
		}
	}

	private warp(pos: Vector2): Vector2 {
		return {
			x: pos.x + Math.sin(1 + pos.y / 80) * 20 - pos.y / 3,
			y: pos.y
		}
	}
}
