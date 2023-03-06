import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  let selectedAuthor = ref('');
  let selectedISBN = ref(0);

  return { 
    selectedAuthor,
    selectedISBN }
})
