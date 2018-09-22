import Simplex from "fast-simplex-noise"

export const simplex = new Simplex({
	min: 0,
	octaves: 8,
	frequency: 0.001
})
