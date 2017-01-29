import * as React from 'react';
import * as ReactRedux from 'react-redux';

class BookDetail extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        if (!this.props.book) {
            return <div>Select a book to get started.</div>
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
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
        book: state.selectedBook
    };
}

export default ReactRedux.connect(mapStateToProps)(BookDetail);