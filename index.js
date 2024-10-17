let books = [];
const addBtn = document.querySelector(".add-btn");
const displayBtn = document.querySelector(".display-btn");
const booksContainer = document.querySelector(".books-container");
const removeBtn = document.querySelector(".remove-btn");
const searchBtn = document.querySelector(".search-btn");

addBtn.addEventListener("click", () =>
  addBook(["title", "author", "yearOfPublication", "genre"])
);

displayBtn.addEventListener("click", () => {
  displayBooks(books);
});

removeBtn.addEventListener("click", () =>
  removeBook(prompt("Enter the title of the book you want to remove"))
);

searchBtn.addEventListener("click", () => {
  searchBooks(prompt("Enter the author or title of the book you want"));
});

function addBook(props) {
  let book = {};
  props.forEach((prop) => {
    book[prop] = prompt(`Enter book ${prop}`);
  });
  books.push(book);
}

function displayBooks(books) {
  booksContainer.innerHTML = ""; // Make sure container is empty before displaying books
  books.forEach((book) => {
    const div = document.createElement("div");
    div.innerHTML = `<p><strong>Title:</strong> ${book["title"]}</p>
      <p><strong>Author:</strong> ${book["author"]}</p>
      <p><strong>Year of Publication:</strong> ${book["yearOfPublication"]}</p>
      <p><strong>Genre:</strong> ${book["genre"]}</p>`;
    booksContainer.appendChild(div);
  });
}

/**
 * Remove book by title
 */
function removeBook(title) {
  const bookTitles = books.map((book) => book.title.toLowerCase());
  if (bookTitles.includes(title.toLowerCase())) {
    books.forEach((book) => {
      if (book.title.toLowerCase() === title.toLowerCase()) {
        books.splice(books.indexOf(book), 1);
        return;
      }
    });
  } else {
    alert(`SORRY! There is no book titled "${title}" in our database.`);
  }
}

/**
 * Search books by author or title
 */
function searchBooks(searchString) {
  // const searchString = prompt("Enter the author or title of the book you want");
  const searchResult = books.filter(
    (book) =>
      book.title.toLowerCase() === searchString.toLowerCase() ||
      book.author.toLowerCase() === searchString.toLowerCase()
  );
  if (searchResult.length > 0) {
    displayBooks(searchResult);
  } else {
    alert(`SORRY!!! There is no author or title named "${searchString}"`);
  }
}
