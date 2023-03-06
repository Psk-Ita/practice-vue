<script setup lang="ts">
import { getBookDetails, type Book } from '@/api/books'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const book = ref<Book>({} as Book)
const router = useRoute()
const id: string = router.params['id'] as string

getBookDetails({ id }).then((r) => {
  book.value = r.book
})
</script>

<template>
  <div v-for="(value, propertyName) in book" :key="`x-${value}`">
    {{ propertyName }}:{{ value }}
  </div>
</template>
