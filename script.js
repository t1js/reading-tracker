// create array of objects (books)

let books = [
    {
    "title": "",
    "author": "",
    "chapter": ""
},
{
    "title": "",
    "author": "",
    "chapter": ""
}
];

let progressForm = document.getElementById("progress-form");

progressForm.addEventListener("submit", submit);

function submit() {

let bookTitle = document.getElementById("book-title");
let bookAuthor = document.getElementById("book-author");
let currentChapter = document.getElementById("current-chapter");

  //use Object.create() to create new book obj using the inputted details

  const newBook = Object.create(books[0]);
  newBook.title = bookTitle;
  newBook.author = bookAuthor;
  newBook.chapter = currentChapter;

  //use books.push() to add new book obj to the books array

  books.push(newBook);

  alert("The form was submitted");
  console.log(
    `We are adding the ${bookTitle.value} by ${bookAuthor.value} to our database.`
  );

}
