export default function selectBook(book: any) {
    // selectBook is an ActionCreator, it needs to retur an action,
    // an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}