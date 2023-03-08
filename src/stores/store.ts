import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { api } from '../api/api'

export const useStore = defineStore('store', () => {
  //state
  let books = ref([] as any)

  //getters
  const getRecentBooks = computed(() => books.value)

  //actions
  async function loadRecentBooks() {
    api.fetchRecentBooks().then((response) => {
      books.value = response as any
      console.log('loadRecentBooks ', response)
    })
  }

  return { getRecentBooks, loadRecentBooks,}
})
