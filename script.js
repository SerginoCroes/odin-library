const addButton = document.querySelector('#addbook');
const container = document.querySelector('#container');
const formInput = document.querySelector('form');

addButton.addEventListener('click', () => formInput.style.display = 'grid');

formInput.addEventListener('submit', function (e) {
  e.preventDefault();
  submitBook(e);
  loopThroughArray();
  e.target.style.display = 'none';
});

let myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead ? 'read.' : 'not read yet.'}`;
  }
}

function submitBook(entry) {
  let tempEntry = [];
  for (let item of entry.target) {
    if (item.type === 'text') {
      tempEntry.push(item.value);
      item.value = '';
    } else if (item.type === 'checkbox') {
      tempEntry.push(item.checked);
      item.checked = false;
    }
  }
  console.log(tempEntry);
  addBookToLibrary(tempEntry[0], tempEntry[1], tempEntry[2], tempEntry[3]);
}

function addBookToLibrary(title, author, pages, hasRead) {
  myLibrary.push(new Book(title, author, pages, hasRead));
}

function loopThroughArray() {
  container.innerHTML = '';
  for (let book in myLibrary) {
    console.log(myLibrary[book].info());
    createDisplay(book);
  }
}

function createDisplay(book) {
  let div = document.createElement('div');
  let author = document.createElement('p');
  let title = document.createElement('p');
  let pages = document.createElement('p');

  author.textContent = `Author: ${myLibrary[book].title}`;
  title.textContent = `Title: ${myLibrary[book].author}`;
  pages.textContent = `Pages: ${myLibrary[book].pages}`;

  div.appendChild(author);
  div.appendChild(title);
  div.appendChild(pages);

  div.classList.add('book');
  div.setAttribute('id', book);

  container.appendChild(div);
}