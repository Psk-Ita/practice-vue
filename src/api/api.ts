export const api = {
  async fetchRecentBooks() {
    let date = new Date()
    const year = date.getFullYear()
    const month = `00${1 + date.getMonth()}`.substr(-2)
    const limit = 12
    const res = await fetch(
      `https://openlibrary.org/recentchanges/${year}/${month}/add-book.json?limit=${limit}`
    )
    let data = (await res.json()) as any

    //get bookKeys
    let bookKeys = data.map((el) => el.changes.find((x) => x.key.match('/books/')))
    console.log('bookKeys ', bookKeys)

    return bookKeys
  },

}
