<script setup lang="ts">
import type { Author } from '@/api/author'
import { getAuthorDetails } from '@/api/author'
import { ref } from 'vue'
import Skeleton from '@/components/Skeleton.vue'
export interface AuthorDetailsProps {
  id: string
}

const loading = ref(true)
const author = ref<Author>({} as Author)
const props = defineProps<AuthorDetailsProps>()

getAuthorDetails(props)
  .then((result) => {
    author.value = result.author
    loading.value = false
  })
  .catch(() => {
    loading.value = false
  })
</script>

<template v-model="book">
  <Skeleton v-if="loading" minWidth="50" maxWidth="90" height="20px" />
  <div v-else>
    <RouterLink :to="`/author/${id}`">{{ author.personal_name }}</RouterLink>
  </div>
</template>

<style scoped lang="scss"></style>
