import { Board } from '@/domain/Board'
import { Level } from '@/domain/Level'
import { Matrix } from '@/domain/Matrix'

export class Sugoku {
	private static request: XMLHttpRequest = new XMLHttpRequest()
	private static _difficulty: Level = 'easy'

	private static baseURL = 'https://sugoku.herokuapp.com'

	private static get boardURL() {
		return `${Sugoku.baseURL}/board?difficulty=${Sugoku._difficulty}`
	}

	private static solveURL = `${Sugoku.baseURL}/solve`

	private static encode = (board: Board) => {
		return `board=${encodeURIComponent(JSON.stringify(board))}`
	}

	private static getAsync(): Promise<Matrix<number>> {
		Sugoku.request.open('GET', Sugoku.boardURL)
		Sugoku.request.send()
		return new Promise(resolve => {
			Sugoku.request.onreadystatechange = function() {
				if (Sugoku.request.readyState === XMLHttpRequest.DONE) {
					const board = JSON.parse(Sugoku.request.response).board
					resolve(board)
				}
			}
		})
	}

	static get difficulty(): Level {
		return Sugoku._difficulty
	}

	static set difficulty(difficulty: Level) {
		Sugoku._difficulty = difficulty
	}

	static async newAsync(): Promise<Board> {
		let board: Board = new Board()
		await Sugoku.getAsync()
			.then((b: Matrix<number>) => { board = new Board(b) })
		return board
	}

	static solveAsync(board: Board): Promise<Board> {
		Sugoku.request.open('POST', Sugoku.solveURL)
		Sugoku.request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		const body = Sugoku.encode(board)
		Sugoku.request.send(body)
		return new Promise(resolve => {
			Sugoku.request.onreadystatechange = function() {
				if (Sugoku.request.readyState === XMLHttpRequest.DONE) {
					const board = JSON.parse(Sugoku.request.response).solution
					resolve(board)
				}
			}
		})
	}
}
