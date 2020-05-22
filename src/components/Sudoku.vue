<template>
	<div class="sudoku">
		<div class="buttons">
			<button>New</button>
			<button>Reset</button>
		</div>
		<Loading />
		<Board />
		<div class="buttons">
			<Checkbox text="Validate" :onChange="validate"/>
			<button>&#8630;</button>
			<button>&#8631;</button>
		</div>
		<div class="buttons"></div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Loading from '@/components/Loading.vue'
import Board from '@/components/Board.vue'
import Checkbox from '@/components/Checkbox.vue'

export default Vue.extend({
	name: 'Sudoku' as string,
	components: {
		Loading,
		Board,
		Checkbox
	},
	props: {

	},
	data() {
		return {

		}
	},
	computed: {
		appLoading(): boolean {
			return this.$store.getters.appLoading
		}
	},
	methods: {
		validate({ target }: Event) {
			const checked = (target as HTMLInputElement).checked
			console.log('validate?', checked)
		}
	}
})
</script>

<style lang="scss">
.sudoku {
	display: inline-flex;
}
</style>
