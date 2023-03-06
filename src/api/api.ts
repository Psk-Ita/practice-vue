export const api = {
  async fetchBooks() {
    const res = await fetch(`http://private-b716af-bookstore.apiary-mock.com/data/books`)
    const data = await res.json()

    return data
  }
}
