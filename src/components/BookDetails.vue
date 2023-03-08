<script setup lang="ts">
import { useStore } from '@/stores/store'
import { onMounted, ref } from 'vue'
import { useRoute, type RouteParams } from 'vue-router'

//data
const route = useRoute()
const id = ref(route.params.id)
</script>
<template>
  <div>details: {{ id }}</div>
</template>

<style scoped></style>
