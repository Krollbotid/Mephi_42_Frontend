<script setup>
import Clicker from './components/Clicker.vue';

const handleButtonClick = (index) => {
	alert(`Clicker ${index} clicked!`);
};
</script>

<template>
	<div>
		<Clicker v-for="index in 100" :key="index" :amount="index" :buttonLabel="`Clicker ${index}`"
			@button-clicked="handleButtonClick" />
	</div>
</template>