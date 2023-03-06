import { reactive, ref, type Ref } from 'vue'

export interface recentChangesOptions {
  kind?: string
  limit?: number
  pattern?: string
}

export interface Action {
  key: string
  authors: string[]
  revision: number
}

export interface RecentChange {
  changes: Action[]
}

export interface recentChangesPayload {
  isLoading: Ref<boolean>
  list: string[]
}

export const recentDefaults: recentChangesOptions = {
  kind: 'add-book',
  limit: 5,
  pattern: '^/books/*'
}

// getRecentChanges became useRecentChanges since it is an hook now, using ref and reactive from vue
export function useRecentChanges(
  props: recentChangesOptions = recentDefaults
): recentChangesPayload {
  const list = reactive<string[]>([])
  const isLoading = ref(false)

  const doFetch = async () => {
    isLoading.value = true

    const { kind, limit, pattern } = { ...recentDefaults, ...props }
    const matchExp = new RegExp(`${pattern}`, 'gim')

    const dtNow = new Date()
    const year = `${dtNow.getFullYear()}`
    const month = `${1 + dtNow.getMonth()}`.padStart(2, '0')

    const datePart = `/${year}/${month}`
    const kindPart = kind ? `/${kind}` : ''
    const limitPart = limit ? `?limit=${limit}` : ''

    const apiResponse = await fetch(
      `https://openlibrary.org/recentchanges${datePart}${kindPart}.json${limitPart}`
    )
    const rawData = (await apiResponse.json()) as RecentChange[]
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const wList = (rawData ?? []).map(
      ({ changes }) =>
        (changes ?? [])
          .find((change) => matchExp.test(`${change.key}`))
          ?.key?.replace(matchExp, '') || ''
    )
    list.splice(0, list.length, ...wList)

    isLoading.value = false
  }

  doFetch()

  return { list, isLoading }
}
