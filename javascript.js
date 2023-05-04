let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    let readString = ''
    if (read) {
      readString = 'has been read'
    } else {
      readString = 'not read yet'
    }
    return `${title} by ${author}, ${pages} pages, ${readString}`
  };
};

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

// console.log(theHobbit.info());

function addBookToLibrary() {
  const title = prompt('What is the title?');
  const author = prompt('Who is the author?');
  const pages = parseInt(prompt('How many pages?'));
  const read = confirm('Have you read it? ("OK" for yes, "Cancel" for no)');

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
};

addBookToLibrary();
// addBookToLibrary();

let table = document.getElementById('libraryTable');

myLibrary.forEach(function(book) {
  let newRow = table.insertRow();
  let titleCell = newRow.insertCell();
  let authorCell = newRow.insertCell();
  let pagesCell = newRow.insertCell();
  let readCell = newRow.insertCell();

  let readString = '';
  if (book.read) {
    readString = 'Yes';
  } else {
    readString = 'No';
  };

  titleCell.innerHTML = book.title;
  authorCell.innerHTML = book.author;
  pagesCell.innerHTML = book.pages;
  readCell.innerHTML = readString;

});

// console.log(myLibrary);