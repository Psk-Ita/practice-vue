<script setup lang="ts">
import { useStore } from '@/stores/store'
import { onMounted } from 'vue'
import BookWidget from '../components/BookWidget.vue'

//data
const store = useStore()

//hooks
onMounted(() => {
  console.log('the Home is now mounted')
  if (!store.getRecentBooks.length) {
    store.loadRecentBooks()
  }
})
</script>

<template>
  <main class="books">
    <BookWidget v-for="(item, i) in store.getRecentBooks" :key="item" :index="i"></BookWidget>
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: auto;
}
.books {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
