<script setup lang="ts">
import { useStore } from '@/stores/store'
import { onMounted, defineProps } from 'vue'
import BookWidget from '../components/BookWidget.vue'
const store = useStore()

onMounted(() => {
  console.log('the component is now mounted')
  store.loadBooks()
})
</script>

<template>
  <main>
    Home
    <div v-if="store.getBooks" class="books">
      <BookWidget v-for="_ in store.getBooks"></BookWidget>
    </div>
  </main>
</template>

<style scoped>
.books {
  display: flex;
  flex-wrap: wrap;
}
</style>
