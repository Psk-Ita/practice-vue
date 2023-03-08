<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useStore } from '@/stores/store'
import { computed, onMounted } from 'vue'

const props = defineProps({
  index: Number
})

//data
const store = useStore()
const router = useRouter()

//computed
const getImage = computed(() => {
  let param = props.index + 1
  return `https://covers.openlibrary.org/b/id/${param}-M.jpg`
})

//methods
function navigateTo() {
  let param = props.index + 1
  router.push({ name: 'book', params: { id: param } })
}

//hooks
onMounted(() => {
  console.log('book widget now is mounted')
})
</script>

<template>
  <div class="box" @click="navigateTo()">
    <img :src="getImage" alt="book cover" />
    <pre>{{ store.getRecentBooks[index].key }}</pre>
  </div>
</template>

<style scoped>
.box {
  width: 200px;
}
img {
  width: 100%;
}
</style>
