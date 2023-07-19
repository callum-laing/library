let myLibrary = [
  {
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    pages: 694,
    read: false,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBookToLibrary = () => {
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;
  let read = getReadValue();
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
};
