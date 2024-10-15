let books = [];

function addBook(title, author, pubYear, genre) {
  let book = {};
  for (let i = 0; i < arguments.length; i++) {
    book[arguments[i]] = prompt(`Enter book ${arguments[i]}`);
  }
  books.push(book);
  return book;
}

console.log(addBook("title", "author", "yearOfPublication", "genre"));
console.log(books);
