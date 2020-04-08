
class BookSearchService{

    constructor(bookDAO){
        this.bookDAO = bookDAO;
    }

    searchBooks(queryOptions, callback){
        this.bookDAO.read((books)=>{
            if(queryOptions['id'] != undefined){
                callback(books.filter(
                    (book)=>{
                        return book.id == queryOptions['id'];
                    }));
                return;
            }
            callback(books);
        });

    }

}

module.exports = BookSearchService;
