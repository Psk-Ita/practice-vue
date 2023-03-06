<script setup lang="ts">
import type { Book } from '@/api/books'
import { getBookDetails } from '@/api/books'
import { ref } from 'vue'
import BookSkeleton from '@/components/BookSkeleton.vue'
import AuthorDetails from '@/components/AuthorDetails.vue'

export interface BookDetailsProps {
  id: string
}
const loading = ref(true)
const book = ref<Book>({} as Book)
const props = defineProps<BookDetailsProps>()

getBookDetails(props)
  .then((result) => {
    book.value = result.book
    loading.value = false
  })
  .catch(() => {
    loading.value = false
  })
</script>

<template v-model="book">
  <div v-if="loading">
    <BookSkeleton />
  </div>
  <div v-else :title="book.subtitle" class="book-details">
    <RouterLink :to="`/book/${id}`">{{ book.title }}</RouterLink>
    <div class="container">
      <img
        v-if="book.covers?.length > 0"
        :src="'https://covers.openlibrary.org/b/id/' + book.covers[0] + '-M.jpg'"
        :style="{ width: '100%' }"
      />
      <img
        v-else
        :src="'https://i0.wp.com/thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png'"
        :style="{ width: '100%' }"
      />
    </div>
    <template v-for="auth in book.authors" :key="auth"><AuthorDetails :id="auth" /></template>
    <div :id="id">{{ book.publish_date }}</div>
  </div>
</template>

<style scoped lang="scss">
.book-details {
  display: flex;
  align-items: center;
  flex-direction: column;
  align-content: space-between;
}
.container {
  height: 100%;
}
</style>
