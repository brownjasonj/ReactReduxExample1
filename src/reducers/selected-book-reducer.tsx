// state argument is not Application state, but only the Container state
// that it is bound too.
export default function selectedBook(state: any = null, action: any) {
    switch (action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
    default:
        return state;
    }
}