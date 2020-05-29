import { Module } from 'vuex'
import { RootState } from './index'
import { Board } from '@/domain/Board'
import { Sugoku } from '@/assets/api'

interface GameState {
	board: Board;
}

const GameStore: Module<GameState, RootState> = {
	state: {
		board: new Board()
	},
	getters: {
		board: (state: GameState) => state.board
	},
	mutations: {
		updateBoard(state, value: Board) {
			state.board = value
		},
		updateSolution(state, value: Board) {
			state.board.solution = value
		}
	},
	actions: {
		async newBoard(context) {
			context.dispatch('startLoad')

			const board = await Sugoku.newAsync()
			const solution = await Sugoku.solveAsync(board)

			context.commit('updateBoard', board)
			context.commit('updateSolution', solution)

			context.dispatch('stopLoad')
		}
	}
}

export default GameStore
