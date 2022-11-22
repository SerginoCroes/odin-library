const addButton = document.querySelector('#addbook');
const cancelButton = document.querySelector('#cancel');
const container = document.querySelector('#container');
const formInput = document.querySelector('form');

addButton.addEventListener('click', () => formInput.style.display = 'grid');

cancelButton.addEventListener('click', () => formInput.style.display = 'none');

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
  const div = document.createElement('div');
  const author = document.createElement('p');
  const title = document.createElement('p');
  const pages = document.createElement('p');
  const hasRead = document.createElement('p');
  const deleteButton = document.createElement('button');

  author.textContent = `Author: ${myLibrary[book].title}`;
  title.textContent = `Title: ${myLibrary[book].author}`;
  pages.textContent = `Pages: ${myLibrary[book].pages}`;
  hasRead.textContent = myLibrary[book].hasRead ? 'read' : 'not read';
  deleteButton.textContent = 'delete';

  deleteButton.addEventListener('click', (e) => {
    myLibrary.splice(e.target.parentNode.id, 1);
    container.removeChild(e.target.parentNode);
  });

  div.appendChild(author);
  div.appendChild(title);
  div.appendChild(pages);
  div.appendChild(hasRead);
  div.appendChild(deleteButton);

  div.classList.add('book');
  div.setAttribute('id', book);

  container.appendChild(div);
}