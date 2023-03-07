import { useCacheStore } from '@/stores/cache'

export interface getBookDetailOptions {
  id: string
}

export interface KeyItem {
  key: string
}

export interface Book {
  identifiers: Record<string, string[]>
  title: string
  subtitle?: string
  authors: string[]
  publish_date: string
  publishers: string[]
  covers: number[]
  ocaid: string
  contributions: string[]
  languages: KeyItem[]
  type: KeyItem
  key: string
  number_of_pages: number
  works: KeyItem[]
  latest_revision: number
  revision: number
}

export interface getBookDetailPayload {
  book: Book | undefined
}

export const getBookDetails = async ({
  id
}: getBookDetailOptions): Promise<getBookDetailPayload> => {
  if (!id) return Promise.reject()

  const cacheStore = useCacheStore()
  let book: Book|undefined = cacheStore.getCache<Book>({key:id, cacheType:'Book'});

  if (!book) {
    const apiResponse = await fetch(`https://openlibrary.org/books/${id}.json`)
    const rawBook = await apiResponse.json()
    book = {
      ...rawBook,
      authors: rawBook.authors?.map(({ key }: KeyItem) => key.replace(/^\/authors\//gim, ''))
    }
    cacheStore.setCache({key:id, cacheType:'Book', payload:book});
  }

  // await new Promise (resolve => setTimeout(resolve, 3000))
  return Promise.resolve({ book })
}
