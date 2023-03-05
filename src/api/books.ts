export interface getBookDetailOptions {
    id:string
}

export interface KeyItem {
    key:string;
}

export interface Book {
    identifiers: Record<string, string[]>
    title: string,
    subtitle?:string,
    authors: string[],
    publish_date: string,
    publishers: string[]
    covers: number[],
    ocaid: string,
    contributions: string[],
    languages: KeyItem[],
    type: KeyItem,
    key: string,
    number_of_pages: number,
    works: KeyItem[],
    latest_revision: number,
    revision: number,
  }

export interface getBookDetailPayload {
    book:Book
}

export const getBookDetails = async({id} : getBookDetailOptions) : Promise<getBookDetailPayload> => {
    const apiResponse = await fetch(`https://openlibrary.org/books/${id}.json`);
    const rawBook = await apiResponse.json();

    const book : Book ={
        ...rawBook,
        authors:rawBook.authors?.map(({key} : KeyItem) => key.replace(/^\/authors\//gim, ''))
    }

    return Promise.resolve({ book });
}
