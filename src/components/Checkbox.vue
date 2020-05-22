<template>
	<label class="checkbox">
		<input type="checkbox" @change="onChange">
		<div class="input">&#10003;</div>
		<span>{{text}}</span>
	</label>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'Checkbox' as string,
	props: {
		text: {
			type: String,
			required: true
		},
		onChange: {
			type: Function,
			required: false
		}
	}
})
</script>

<style lang="scss">
$checkbox-size: 20px;

.checkbox {
	display: inline-flex;
	align-items: center;

	input[type='checkbox'] {
		display: none;
	}

	.input {
		border: 2.5px solid $main-purple;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 3px;
		width: $checkbox-size;
		height: $checkbox-size;
		background-clip: content-box;
		padding: 7px;
		margin-right: 5px;
		transition: background-color .5s, color 1.5s, padding 1.5s;
		color: transparent;
		font-size: 12px;
		font-weight: 700;
	}

	input:checked ~ .input {
		background-color: $bleak-purple;
		color: $main-purple;
		animation: jello 1s 1 ease-in-out;
		padding: 0px;
	}
}

@keyframes jello {
	40% {
		transform: scale(0.6, 1.4);
	}

	50% {
		transform: scale(1.4, 0.6);
	}

	60% {
		transform: scale(0.7, 1.3);
	}

	70% {
		transform: scale(1.2, 0.8);
	}

	100% {
		transform: scale(1, 1);
	}
}
</style>
