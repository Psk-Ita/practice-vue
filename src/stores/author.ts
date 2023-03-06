import type { Author } from '@/api/author'
import { defineStore } from 'pinia'

export interface AuthorState {
  authors: Record<string, Author>
}
export const useAuthorStore = defineStore('author-cache', {
  state: (): AuthorState => ({
    authors: {}
  })
})
