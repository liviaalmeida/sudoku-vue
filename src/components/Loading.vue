<template>
	<div class="loading"></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'Loading' as string
})
</script>

<style lang="scss">
@keyframes Loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(120deg);
  }
}

$loading-size: 50px;

.loading {
  display: inline-block;
  align-self: center;
  justify-self: center;
  width: $loading-size;
  height: $loading-size;
  border: 3px dotted $dark-green;
  border-radius: 50%;
  animation: Loading infinite 1s ease-out;
}
</style>
