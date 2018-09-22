import { Vector2 } from "../types"

export function magnitude(a: Vector2) {
	const { sqrt, pow } = Math
	return sqrt(pow(a.x, 2) + pow(a.y, 2))
}
