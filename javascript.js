let myLibrary = [];

function Book(title, author, pages, read) {
  // constructor
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    let readString = ''
    if (read) {
      readString = 'has been read'
    } else {
      readString = 'not read yet'
    }
    return `${title} by ${author}, ${pages} pages, ${readString}`
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)

console.log(theHobbit.info());

function addBookToLibrary() {
  
}