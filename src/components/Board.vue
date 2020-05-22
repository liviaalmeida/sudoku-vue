<template>
		<form name="board" class="board">
			<table>
				<tr class="tr" v-for="(row, r) in board" :key="r">
					<td v-for="(val, c) in row" :key="`${r}.${c}`">
						<input :data-row="r" :data-col="c"
							:class="inputClass(r,c)"
							type="number" min="1" max="9"
							@blur="blur" @focus="focus"
							form="board">
					</td>
				</tr>
			</table>
		</form>
</template>

<script lang="ts">
import Vue from 'vue'
import { Board } from '@/domain/Board'

export default Vue.extend({
	name: 'Board' as string,
	components: {
	},
	props: {

	},
	data() {
		return {
			focused: {
				row: -1,
				col: -1
			}
		}
	},
	computed: {
		appLoading(): boolean {
			return this.$store.getters.appLoading
		},
		board(): Board {
			return this.$store.getters.board
		}
	},
	methods: {
		blur() {
			this.focused = {
				row: -1,
				col: -1
			}
		},
		focus({ target }: Event) {
			const { row, col } = (target as HTMLInputElement).dataset
			this.focused = {
				row: Number(row),
				col: Number(col)
			}
		},
		inputClass(r: number, c: number): string {
			const { row, col } = this.focused
			const shouldHighlight = (row === r && col !== c) || (row !== r && col === c)
			return shouldHighlight ? 'highlight' : ''
		}
	}
})
</script>

<style lang="scss">
$input-background: lightgray;
$input-border: 1px solid $input-background;
$board-border: 2px solid $main-purple;

.board {
	align-self: center;

	table {
		table-layout: fixed;
	}

	input {
		text-align: center;
		border: none;
		padding: 10px 0;

		&:focus {
			outline: 1px solid transparent;
			background-color: $input-background;
		}

		&.highlight {
			background-color: lighten($input-background, 10%);
		}

		/* Chrome, Safari, Edge, Opera */
		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		/* Firefox */
		&[type=number] {
			-moz-appearance: textfield;
		}
	}

	tr {
		&:nth-child(3n):not(:last-child) {
			border-bottom: $board-border;
		}

		&:not(:last-child) {
			border-bottom: $input-border;
		}
	}

	td {
		&:nth-child(3n):not(:last-child) {
			border-right: $board-border;
		}

		&:not(:last-child) {
			border-right: $input-border;
		}
	}
}
</style>
