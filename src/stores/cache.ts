import type { Author } from '@/api/author'
import type { Book } from '@/api/books'
import { defineStore } from 'pinia'

export interface cacheState {
  books: Record<string, Book>,
  authors: Record<string, Author>
}

export interface getCacheProps {
  key:string,
  cacheType:'Book' | 'Author',
}

export interface setCacheProps {
  key:string,
  payload: Book | Author,
  cacheType:'Book' | 'Author',
}

export const useCacheStore = defineStore('cache', {
  state: (): cacheState => ({
    books: {},
    authors: {},
  }),
  actions: {
    getCache <T>({key, cacheType}:getCacheProps): T | undefined {
      const objCache = cacheType === 'Book' ? this.$state.books : this.$state.authors;
      return objCache[key] as T;
    },
    setCache ({key, cacheType, payload}:setCacheProps): void {
      switch(cacheType){
        case 'Book':{
          this.$state.books[key]=payload as Book;
          break;
        } case 'Author':{
          this.$state.authors[key]=payload as Author;
          break;
        }
      }

    }
  }
})
