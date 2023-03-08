<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useStore } from '@/stores/store'
import { onMounted } from 'vue'

const props = defineProps({
  index: Number
})

//data
const store = useStore()
const router = useRouter()

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
    <img
      src="https://i0.wp.com/thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png"
      alt="book cover"
    />
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
