import EventEmitter from 'events'

class BookStore extends EventEmitter{

    _books = [];

    emitChange(){
        this.emit('Change');
    }

    addChangeListener(callback){
        this.on('Change', callback);
    }

    removeChangeListener(callback){
        this.removeListener('Change', callback);
    }

}

var store = new BookStore();

export default store;
