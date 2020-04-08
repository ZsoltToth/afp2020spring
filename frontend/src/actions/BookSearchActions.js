import dispatcher from '../BookDispatcher'

class BookSearchActions{

    search(title, author){
        dispatcher.handleViewAction({
            actionType : 'BOOK_SEARCH',
            payload : {
                title : title,
                author : author
            }
        });
    }
}

export default new BookSearchActions();
