import { Module } from 'vuex'
import { Score } from '@/domain/Score'

interface ScoreState {
	current: Score
	past: Array<Score>
}

const ScoreStore: Module<ScoreState, any> = {
	state: {
		current: new Score(),
		past: new Array<Score>()
	},
	getters: {

	},
	mutations: {

	},
	actions: {

	}
}

export default ScoreStore
