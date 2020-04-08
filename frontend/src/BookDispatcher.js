import {Dispatcher} from 'flux';

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
    console.log(payload.action.payload);
});

export default dispatcher;
