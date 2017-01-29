import { combineReducers } from 'redux';

import bookList from './book-list.reducer';
import selectedBook from './selected-book-reducer';

// The rootReducer is the overall application state is create from a set of "sub" states.
// Each "sub"-state is defined by an individal reducer, which is a funtion that returns 
// a state.
const rootReducer = combineReducers({
    bookList,
    selectedBook
});

export default rootReducer;