import Vue from 'vue'
import Vuex from 'vuex'

import GameStore from './game'
import ScoreStore from './score'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		appLoading: true
	},
	getters: {
		appLoading: (state) => state.appLoading
	},
	mutations: {
		startLoading(state) {
			state.appLoading = true
		},
		stopLoading(state) {
			state.appLoading = false
		}
	},
	actions: {
	},
	modules: {
		GameStore,
		ScoreStore
	}
})
