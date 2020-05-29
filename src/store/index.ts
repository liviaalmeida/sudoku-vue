import Vue from 'vue'
import Vuex from 'vuex'

import GameStore from './game'
import ScoreStore from './score'

Vue.use(Vuex)

export interface RootState {
	appLoading: boolean;
}

export default new Vuex.Store<RootState>({
	state: {
		appLoading: true
	},
	getters: {
		appLoading: (state) => state.appLoading
	},
	mutations: {
		updateLoading(state, value: boolean) {
			state.appLoading = value
		}
	},
	actions: {
		startLoad(context) {
			context.commit('updateLoading', true)
		},
		stopLoad(context) {
			context.commit('updateLoading', false)
		}
	},
	modules: {
		GameStore,
		ScoreStore
	}
})
