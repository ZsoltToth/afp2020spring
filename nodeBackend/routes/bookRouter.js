var express = require('express');
var router = express.Router();

module.exports = (bookSearchService) =>{

    router.get('/', (req, res)=>{
        bookSearchService.searchBooks({}, (books)=>{
            res.status(200).send(books);
        });
    });

    router.get('/:id', (req, res)=>{
        bookSearchService.searchBooks(
            {id : req.params['id']},
            (books)=>{
                res.status(200).send(books);
            });
    });

    return router;
};




