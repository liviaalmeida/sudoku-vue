import { Module } from 'vuex'
import { RootState } from './index'
import { Score } from '@/domain/Score'

interface ScoreState {
	current: Score;
	past: Array<Score>;
}

const ScoreStore: Module<ScoreState, RootState> = {
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
