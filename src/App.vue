<script setup lang="ts">
import { ref } from 'vue';

const version = ref(APP_VERSION);
</script>

<template>
  <span class="hidden">BUNN StarterApp v{{ version }}</span>
  <router-view></router-view>
</template>

<style></style>
