export interface Author {
    biography: string;
    id: string;
    image: string;
    name: string;
}


async function fetchAuthorById(authorId: number | string) {
    // const authorIdForUrl = dataStore.selectedAuthor || dataStore.selectedAuthor !== '' ? dataStore.selectedAuthor : authorId
    const authorIdForUrl = authorId
    const res = await fetch(
        `https://private-b716af-bookstore.apiary-mock.com/data/authors/${authorIdForUrl}`
    )
    return await res.json()
}

export const getAuthorById = async (authorId: number | string) => {
    const res = await fetch(
        `http://private-b716af-bookstore.apiary-mock.com/authors/${authorId}`
    )
    return await res.json()
}

export const getBookByISBN = async (isbn: number | string) => {
    const res = await fetch(
        `http://private-b716af-bookstore.apiary-mock.com/books/${isbn}`
    )
    return await res.json()   
}

