import Book from "../types/book.type";

export default function bookList(state: Book[] = [], action: any) : Book[] {
    return [
        new Book("Javascript: The Good Parts", 101),
        new Book("Harry Potter", 39),
        new Book("The Dark Tower", 89),
        new Book("Eloquent Ruby", 1)
    ];
}