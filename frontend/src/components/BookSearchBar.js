import React from 'react';
import BookSearchActions from "../actions/BookSearchActions";

class BookSearchBar extends React.Component{


    constructor() {
        super();
        this.state = {
            title : "",
            author : ""
        };
    }

    render(){
        return(
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>Title</td>
                        <td>
                            <input
                                type={"text"}
                                value={this.state.title}
                                onChange={(e)=>{
                                    let st = this.state;
                                    st.title = e.target.value;
                                    this.setState(st);
                                    }
                                }
                            /></td>
                    </tr>

                    <tr>
                        <td>Author</td>
                        <td>
                            <input
                                type={"text"}
                                value={this.state.author}
                                onChange={(e)=>{
                                    let st = this.state;
                                    st.author = e.target.value;
                                    this.setState(st);
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button
                                className="btn btn-info"
                                onClick={()=>{BookSearchActions.search(this.state.title, this.state.author)}}
                            >Search
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BookSearchBar;
