<script setup>
import { ref } from 'vue';

const count = ref(0);
const props = defineProps(['amount', 'buttonLabel']);
const emit = defineEmits(['button-clicked']);

const incrementCounter = () => {
	count.value += props.amount;
	emit('button-clicked', props.amount);
};
</script>

<template>
	<div>
		<button @click="incrementCounter">{{ buttonLabel }}</button>
		<p>You clicked me {{ count }} times.</p>
	</div>
</template>
