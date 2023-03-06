import type { Book } from '@/api/books'
import { defineStore } from 'pinia'

export interface BookState {
  books: Record<string, Book>
}
export const useBookStore = defineStore('books-cache', {
  state: (): BookState => ({
    books: {}
  })
})
