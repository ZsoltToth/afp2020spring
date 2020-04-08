const faker = require('faker');
const fs = require('fs');

var authors = [];
const AUTHOR_CNT = 100;
for( let i = 0; i < AUTHOR_CNT; i++){
    authors.push(faker.name.findName());
}

generateBook = (id) =>{
    titleLength = Math.round(Math.random() * 3) + 2;
    authorCount = Math.round(Math.random() * 3) + 1;
    bookAuthors = [];
    for(let i = 0; i < authorCount; i++){
        bookAuthors.push(faker.random.arrayElement(authors));
    }
  return {
      id : id,
      title : faker.random.words(titleLength),
      authors : bookAuthors
  }
};
let books = [];
const BOOK_CNT = 1000;
for(let i = 0; i < BOOK_CNT; i++){
    books.push(generateBook(i));
}

fs.writeFile('books.json',JSON.stringify(books), (err)=>{});
