<script setup>
import { ref } from 'vue'

const count = ref(0)
const props = defineProps(['amount'])

const onClick = () => {
	count.value += props.amount
}
</script>

<template>
	<div>You clicked me {{ count }} times.</div>
	<div @click="onClick">
		<slot />
	</div>
</template>