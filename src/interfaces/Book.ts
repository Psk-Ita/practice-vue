export interface Book {
    ISBN: number;
    title: string;
    author: string;
    summary: string;
    image: string;
    price: {
        currency: string;
        value: number;
        displayValue: number;
    };
}

export interface BookPrice {
    currency: string;
    value: number;
    displayValue: number;
}

/*
EXAMPLE
{
    "ISBN":9780552159722,
    "title":"Deception point",
    "author":"Dan Brown",
    "summary":"When a new NASA satellite detects evidence of an astonishingly rare object buried deep in the Arctic ice, the floundering space agency proclaims a much-needed victory.. a victory that has profound implications for U.S. space policy and the impending presidential election. With the Oval Office in the balance, the President dispatches White House Intelligence analyst Rachel Sexton to the Arctic to verify the authenticity of the find. Accompanied by a team of experts, including the charismatic academic Michael Tolland, Rachel uncovers the unthinkable - evidence of scientific trickery - a bold deception that threatens to plunge the world into controversy..",
    "image":"http://s.s-bol.com/imgbase0/imagebase/large/FC/8/8/9/8/1001004006878988.jpg",
    "price":{
       "currency":"EUR",
       "value":9.99,
       "displayValue":"9.99"
    }
 },
 */