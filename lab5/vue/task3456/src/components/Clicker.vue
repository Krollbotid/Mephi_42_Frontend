<script setup>
import { ref } from 'vue';

const count = ref(0)
const props = defineProps(['amount'])

console.log(`clicker amount: ${props.amount}`);
const incrementCounter = () => {
	count.value += props.amount;
};
</script>



<template>
	<div>
		<button @click="incrementCounter">You clicked me {{ count }} times.</button>
	</div>
</template>

<style scoped></style>
