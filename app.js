let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.innerHTML = `<span>Author:</span> ${book.author}`;

    const pages = document.createElement("p");
    pages.innerHTML = `<span>Pages:</span> ${book.pages}`;

    const read = document.createElement("p");
    read.innerHTML = `<span>Read:</span> ${book.read ? "Yes" : "No"}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("btn-card");
    removeButton.addEventListener("click", () => removeBook(index));

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(removeButton);

    bookList.appendChild(card);
  });
}

function addBook() {
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const readCheckbox = document.getElementById("read");

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const read = readCheckbox.checked;

  if (title && author && pages !== "") {
    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    displayBooks();

    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readCheckbox.checked = false;
  }
}

displayBooks();
