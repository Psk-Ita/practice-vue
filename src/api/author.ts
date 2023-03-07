import { useCacheStore } from '@/stores/cache'

export interface getAuthorDetailOptions {
  id: string
}

export interface Author {
  key: string
  personal_name: string
}

export interface getAuthorDetailsPayload {
  author: Author | undefined
}

export const getAuthorDetails = async ({
  id
}: getAuthorDetailOptions): Promise<getAuthorDetailsPayload> => {
  if (!id) return Promise.reject()

  const cacheStore = useCacheStore()
  let author: Author|undefined = cacheStore.getCache<Author>({key:id, cacheType:'Author'});

  if (!author) {
    const apiResponse = await fetch(`https://openlibrary.org/authors/${id}.json`)
    author = (await apiResponse.json()) as Author
    cacheStore.setCache({key:id, cacheType:'Author', payload:author});
  }

  return Promise.resolve({ author })
}
