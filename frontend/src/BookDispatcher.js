import {Dispatcher} from 'flux';
import axios from 'axios';
import store from './stores/BookStore'

class BookDispatcher extends Dispatcher{

    handleViewAction(action){
        this.dispatch({
           action : action
        });
    }
}

const dispatcher = new BookDispatcher();

dispatcher.register((payload)=>{
    if(payload.action.actionType !== 'BOOK_SEARCH'){
        return;
    }
    axios.get('/books').then((resp)=>{
       store._books = resp.data.filter((book)=>{
           return book.title.includes(payload.action.payload.title)
       });
       store.emitChange();
    });
});

export default dispatcher;
