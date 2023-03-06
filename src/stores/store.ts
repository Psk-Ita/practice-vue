import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { api } from '../api/api'

export const useStore = defineStore('store', () => {
  //state
  let books = ref([] as Book[])

  //getters
  const getBooks = computed(() => books.value)

  //actions
  async function loadBooks() {
    api.fetchBooks().then((response) => {
      books.value = response as Book[]
      console.log('loadBooks ', response)
    })
  }

  return { getBooks, loadBooks }
})

interface Book {
  ISBN: number
  author: string
  image: string
  price: {
    currency: string
    displayValue: string
    value: number
  }
  summary: string
  title: string
}
