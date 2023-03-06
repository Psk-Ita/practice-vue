<script setup lang="ts">
import { getAuthorDetails, type Author } from '@/api/author'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const author = ref<Author>({} as Author)
const router = useRoute()
const id: string = router.params['id'] as string

getAuthorDetails({ id }).then((r) => {
  author.value = r.author
})
</script>

<template>
  <div v-for="(value, propertyName) in author" :key="`x-${value}`">
    {{ propertyName }}:{{ value }}
  </div>
</template>
