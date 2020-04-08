var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



var dummyDB = [
    {
        id : 1,
        title : "valami",
        authros : [
            {name : "John Doe"}
        ]
    },
    {
        id : 2,
        title : "amerika",
        authros : [
            {name : "Jane Doe"}
        ]
    }
];

var BookDAO = require('./dao/BookDAO');
var BookSearchService = require('./services/BookSearchService');

var book_dao = new BookDAO(dummyDB);
var book_search_service = new BookSearchService(book_dao);
var bookRouter = require('./routes/bookRouter')(book_search_service);


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', bookRouter);



module.exports = app;
