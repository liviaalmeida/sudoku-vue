<template>
  <div class="home">
		<div class="buttons">
			<button class="regular">New</button>
			<button class="regular">Reset</button>
		</div>
		<Loading v-if="appLoading" class="loader" />
		<Board v-else />
		<div class="buttons">
			<span class="undo-redo">
				<button class="round">&#8630;</button>
				<button class="round">&#8631;</button>
			</span>
			<Checkbox text="Validate" :onChange="validate"/>
		</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Loading from '@/components/Loading.vue'
import Board from '@/components/Board.vue'
import Checkbox from '@/components/Checkbox.vue'

export default Vue.extend({
	name: 'Home' as string,
	components: {
		Board,
		Checkbox,
		Loading
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
		}
	}
})
</script>

<style lang="scss">
@import "~@/assets/scss/button.scss";

.home {
	.buttons {
		display: flex;
		justify-content: space-between;
		margin: 15px 10px;

		.undo-redo button:last-child {
			margin-left: 5px;
		}
	}

	.loader {
		position: absolute;
		top: 43%;
	}
}
</style>
