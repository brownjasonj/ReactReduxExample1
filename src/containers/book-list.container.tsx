import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';

import selectBook from '../actions/index';
import Book from '../types/book.type';

class BookList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    private renderList()  {
        return this.props.bookList.map((book: Book) => {
            return (
                <li key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                {book.title}
                </li>
            );
        });
    }

    public render() {
        return (
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        );
    }
}

// the mapStateToProps function takes an application state and 
// selects a specific sub state for the a specific component
// so functionally we have:
//
//      mapStateToProps: Application State => Container State
// 
// The ReactRedux framework will add the object items returned 
// by this function to the props state of the container!
//
function mapStateToProps(state: any) {
    // Whatever is returned will show up as props 
    // inside of BookList
    return {
        bookList: state.bookList
    };
}

// Anything returned from this function will end up as props 
// on the BookList container.  As with the mapStateToProps this 
// function in essence adds new object items(members) to the 
// dispatch object passed in.
// The ReactRedux framework will add the items in the dispatch
// object to the props object of the container.
// 
function mapDispatchToProps(dispatch: any) {
    // Whenever selectBook is called, the result should be passed 
    // to all of our reducers  (that have been bound to it!)
    return Redux.bindActionCreators({selectBook: selectBook}, dispatch);
}

// the Redux connect function in essence takes the app state to container state function
// calls it to get the container state and then binds the contrainer state the props value 
// of the container......conceptually very simple, but very complicated when expressed in code!
// In addition, the 
export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(BookList);