import React from 'react';
import BookStore from '../stores/BookStore'
class BookSearchResults extends React.Component{


    constructor() {
        super();
        this.state = { books : []};
        this._onChange = this._onChange.bind(this);
    }

    _onChange(){
        this.setState({books : BookStore._books});
    }

    componentDidMount() {
        BookStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        BookStore.removeChangeListener(this._onChange);
    }

    render(){
        return(
            <table className="table">
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Authors</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.books.map((book)=>{
                       return (
                           <tr key={book.id}>
                               <td>{book.id}</td>
                               <td>{book.title}</td>
                               <td><ol>{book.authors.map((author)=>{
                                   return (<li>{author}</li>)
                               })}</ol></td>
                           </tr>
                       );
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default BookSearchResults;
