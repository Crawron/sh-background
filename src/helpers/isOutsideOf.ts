import { Vector2 } from "../types"

export function isOutsideOf(position: Vector2, domain: Vector2, margin = 0) {
	return (
		position.x > domain.x + margin ||
		position.x < 0 - margin ||
		position.y > domain.y + margin ||
		position.y < 0 - margin
	)
}
