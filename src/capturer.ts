import CCapture from "ccapture.js"
import { bind } from "decko"

class Capturer {
	ccapture: any
	capturing = false

	constructor() {
		this.createCapturer()
	}

	@bind
	createCapturer() {
		this.ccapture = new CCapture({
			format: "png",
			framerate: 60,
			verbose: false
		})
	}

	@bind
	start() {
		this.createCapturer()
		this.ccapture.start()
	}

	@bind
	stop() {
		if (!this.ccapture) return
		this.ccapture.stop()
		this.ccapture.save()
	}

	@bind
	toggle() {
		const { capturing, stop, start } = this

		if (capturing) stop()
		else start()

		this.capturing = !capturing
	}

	@bind
	capture(canvas: HTMLCanvasElement) {
		if (this.ccapture) this.ccapture.capture(canvas)
	}
}

export const capturer = new Capturer()
