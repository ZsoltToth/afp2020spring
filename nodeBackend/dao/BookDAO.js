class BookDAO{

    constructor(db){
        this.database = db;
    }

    create(book, success, error){

    }

    read(callback){
        callback(this.database);
    }

    update(book, success, error){

    }

    delete(book, success, error){

    }
}

module.exports = BookDAO;
