import { useAuthorStore } from '@/stores/author'

export interface getAuthorDetailOptions {
  id: string
}

export interface Author {
  key: string
  personal_name: string
}

export interface getAuthorDetailsPayload {
  author: Author
}

export const getAuthorDetails = async ({
  id
}: getAuthorDetailOptions): Promise<getAuthorDetailsPayload> => {
  if (!id) return Promise.reject()

  const authorStore = useAuthorStore()
  let author: Author = authorStore.authors[id]

  if (!author) {
    const apiResponse = await fetch(`https://openlibrary.org/authors/${id}.json`)
    author = (await apiResponse.json()) as Author
    authorStore.authors[id] = author
  }

  return Promise.resolve({ author })
}
