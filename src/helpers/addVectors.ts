import { Vector2 } from "../types"

export function addVectors(a: Vector2, b: Vector2) {
	return {
		x: a.x + b.x,
		y: a.y + b.y
	}
}

export function subVectors(a: Vector2, b: Vector2) {
	return {
		x: a.x - b.x,
		y: a.y - b.y
	}
}
