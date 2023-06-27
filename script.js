// array of objects (books)

let books = [];

let progressForm = document.getElementById("progress-form");

progressForm.addEventListener("submit", submit);

function submit(event) {

event.preventDefault(); // prevent the form from submitting and refreshing the page (why do I need this?)

let bookTitle = document.getElementById("book-title").value;
let bookAuthor = document.getElementById("book-author").value;
let currentChapter = document.getElementById("current-chapter").value;

  //create new book obj using the inputted details

  const newBook = {
  title: bookTitle,
  author: bookAuthor,
  chapter: currentChapter
  }

  //use books.push() to add new book obj to the books array

  books.push(newBook);

  //just testing

  alert("The form was submitted");
  console.log(
    `We are adding the ${bookTitle} by ${bookAuthor} to our list.`
  );

//clear the form inputs

  progressForm.reset();

  //display the inputted details below the form

  displayBookProgress();

};

//chatgpt solution

function displayBookProgress() {
  let bookProgressList = document.getElementById("book-progress-list");

  // Clear previous contents
  bookProgressList.innerHTML = "";

  // Loop through the books array and create list items for each book
  books.forEach(function (book) {
    let listItem = document.createElement("li");
    listItem.textContent = `Title: ${book.title}, Author: ${book.author}, Chapter: ${book.chapter}`;
    bookProgressList.appendChild(listItem);
  });
};
