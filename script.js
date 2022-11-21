const addButton = document.querySelector('#addbook');
const formInput = document.querySelector('form');

addButton.addEventListener('click', () => formInput.style.display = 'grid');

formInput.addEventListener('submit', function (e) {
  e.preventDefault();

  console.log(e);

  e.target.style.display = 'none';

//  for (let item of e.target){
//    console.log(item.value);
//  }
});

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

function addBookToLibrary(title, author, pages, hasRead) {  
  myLibrary.push(new Book(title, author, pages, hasRead));
}

function loopThroughArray() {
  for (let book in myLibrary){
    console.log(myLibrary[book].info());
  }
}