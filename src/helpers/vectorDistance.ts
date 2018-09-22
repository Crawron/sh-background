import { Vector2 } from "../types"
import { addVectors } from "./addVectors"
import { magnitude } from "./vectorMagnitude"

export function distance(a: Vector2, b: Vector2) {
	const vectorSum = addVectors(a, b)
	return magnitude(vectorSum)
}
