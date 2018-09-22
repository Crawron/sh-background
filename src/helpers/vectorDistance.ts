import { Vector2 } from "../types"
import { subVectors } from "./addVectors"
import { magnitude } from "./vectorMagnitude"

export function vectorDistance(a: Vector2, b: Vector2) {
	const vectorSum = subVectors(a, b)
	return magnitude(vectorSum)
}
