let books = [];
const addBtn = document.querySelector(".add-btn");
const displayBtn = document.querySelector(".display-btn");
const booksContainer = document.querySelector(".books-container");

addBtn.addEventListener("click", () => {
  addBook("title", "author", "yearOfPublication", "genre");
});

displayBtn.addEventListener("click", () => {
  displayBooks(books);
});

function addBook(title, author, pubYear, genre) {
  let book = {};
  for (let i = 0; i < arguments.length; i++) {
    book[arguments[i]] = prompt(`Enter book ${arguments[i]}`);
  }
  books.push(book);
  console.log(books);
}

function displayBooks(books) {
  books.forEach((book) => {
    const div = document.createElement("div");
    // const paragraph = document.createElement("p");
    div.innerHTML = `<p><strong>Title:</strong> ${book["title"]}</p>
      <p><strong>Author:</strong> ${book["author"]}</p>
      <p><strong>Year of Publication:</strong> ${book["yearOfPublication"]}</p>
      <p><strong>Genre:</strong> ${book["genre"]}</p>`;
    // div.appendChild(divContent);
    booksContainer.appendChild(div);
  });
}
