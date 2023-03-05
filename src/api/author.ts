export interface getAuthorDetailOptions {
    id:string
}

export interface Author {
    personal_name: string,
}

export interface getAuthorDetailsPayload{
    author:Author
}

export const getAuthorDetails = async({id} : getAuthorDetailOptions) : Promise<getAuthorDetailsPayload> => {
    const apiResponse = await fetch(`https://openlibrary.org/authors/${id}.json`);
    const rawAuthor = await apiResponse.json();
    const author: Author = {...rawAuthor}
    return Promise.resolve({ author });
}
