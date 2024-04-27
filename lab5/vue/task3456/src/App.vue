<script setup>
import Clicker from './components/Clicker.vue';
</script>

<template>
  <div>
    <Clicker v-for="index in 100" :key="index" :amount="index" />
  </div>
</template>
