import { Module } from 'vuex'
import { Board } from '@/domain/Board'

interface GameState {
	board: Board;
}

const GameStore: Module<GameState, any> = {
	state: {
		board: new Board()
	},
	getters: {
		board: (state: GameState) => state.board
	},
	mutations: {

	},
	actions: {

	}
}

export default GameStore
