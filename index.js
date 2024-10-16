let books = [];
const addBtn = document.querySelector(".add-btn");
const displayBtn = document.querySelector(".display-btn");
const booksContainer = document.querySelector(".books-container");
const removeBtn = document.querySelector(".remove-btn");

addBtn.addEventListener("click", () => {
  addBook();
});

displayBtn.addEventListener("click", () => {
  booksContainer.innerHTML = ""; // Make sure container is empty before displaying books
  displayBooks(books);
});

removeBtn.addEventListener("click", () => {
  removeBook();
});

function addBook() {
  let book = {};
  let bookProps = ["title", "author", "yearOfPublication", "genre"];
  bookProps.forEach((prop) => {
    book[prop] = prompt(`Enter book ${prop}`);
  });
  books.push(book);
  console.log(books);
}

function displayBooks(books) {
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
function removeBook() {
  const title = prompt("Enter the title of the book you want to remove");
  books.forEach((book) => {
    if (book.title.toLowerCase() === title.toLowerCase()) {
      books.pop(book);
      // return;
    }
  });
  // alert(`There's no book titled "${title}"`);
}
