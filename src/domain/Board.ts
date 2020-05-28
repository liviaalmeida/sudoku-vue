import { Matrix } from './Matrix'

const copyBoard = (board: Matrix<number>) => board.map(row => [...row])

export class Board extends Array<Array<number>> {
	public initial: Matrix<number>
	public solution: Matrix<number>

	constructor(initial?: Matrix<number>, solution?: Matrix<number>) {
		if (initial === undefined) {
			const iterable = { length: 9 }
			initial = Array.from(iterable, () => Array.from(iterable, () => 0))
		}
		if (solution === undefined) {
			solution = copyBoard(initial)
		}

		super(...copyBoard(initial))
		this.initial = copyBoard(initial)
		this.solution = copyBoard(solution)
	}

	get validation(): Matrix<boolean> {
		return super.map((row, r) => row.map((v, c) => v === 0 || v === this.solution[r][c]))
	}

	reset(): void {
		this.initial.forEach(
			(row, r) => row.forEach((value, c) => { super[r][c] = value })
		)
	}

	solve(): void {
		this.solution.forEach(
			(row, r) => row.forEach((value, c) => { super[r][c] = value })
		)
	}
}
