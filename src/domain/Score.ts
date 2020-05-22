export class Score {
	public startTime: Date
	public endTime?: Date
	public value?: number

	constructor() {
		this.startTime = new Date()
	}

	get elapsed(): number {
		const now = new Date()
		return now.getTime() - this.startTime.getTime()
	}

	finish() {
		this.endTime = new Date()
		const diff = this.endTime.getTime() - this.startTime.getTime()
		this.value = 1000.0 / diff
	}
}
