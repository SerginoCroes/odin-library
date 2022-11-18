let myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;

  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead ? 'read.' : 'not read yet.'}`;
  }
}

function addBookToLibrary() {
  // do stuff here
}