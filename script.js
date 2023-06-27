// array of objects (books) that should act as a storage?

// let books = [
//     {
//     "title": "",
//     "author": "",
//     "chapter": ""
// },
// {
//     "title": "",
//     "author": "",
//     "chapter": ""
// }
// ];

let bookTemplate = {
  title: "",
  author: "",
  chapter: ""
};

let books = [];

let progressForm = document.getElementById("progress-form");

progressForm.addEventListener("submit", submit);

function submit(event) {

event.preventDefault(); // prevent the form from submitting and refreshing the page

let bookTitle = document.getElementById("book-title").value;
let bookAuthor = document.getElementById("book-author").value;
let currentChapter = document.getElementById("current-chapter").value;

  //create new book obj using the inputted details

  // const newBook = {
  // title: bookTitle,
  // author: bookAuthor,
  // chapter: currentChapter
  // }

  const newBook = Object.assign({}, bookTemplate); // Clone the book template
  newBook.title = bookTitle;
  newBook.author = bookAuthor;
  newBook.chapter = currentChapter;

  //use books.push() to add new book obj to the books array

  books.push(newBook);

  //just testing

  alert("The form was submitted");
  console.log(
    "We are adding the " + bookTitle + " by " + bookAuthor + " to our database."
  );

};

document.getElementById("progress").innerHTML = books.title + ", " + books.author + ", " + books.chapter;
