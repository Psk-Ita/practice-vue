<script setup lang="ts">
import { useStore } from '@/stores/store'

const store = useStore()
</script>

<template>
  <div class="box" v-for="book in store.getBooks">
    <img :src="book.image" alt="book" />
  </div>
</template>

<style scoped>
.box {
  width: 200px;
  margin: auto;
}
img {
  width: 100%;
}
</style>
