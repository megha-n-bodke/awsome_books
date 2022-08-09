const bookTitle = document.getElementById("title");
const author = document.getElementById("author");
const submitbtn = document.getElementById("submitbtn");
const displayTitle = document.getElementById("displayTitle");
const displayAuthor = document.getElementById("displayAuthor");
const remove = document.getElementById("removebtn");
const bookName = document.getElementById("bookName");

/* Book add functionality */
submitbtn.addEventListener("click", () => {
  let books = [];
  if (localStorage.getItem("booksInformation")) {
    books = JSON.parse(localStorage.getItem("booksInformation"));
    books.push({ title: bookTitle.value, author: author.value });
  } /* else {
    books.push({ title: bookTitle.value, author: author.value });
    displayTitle.innerText = bookTitle.value;
    displayTitle.innerText = displayAuthor.value;
  } */
  localStorage.setItem("booksInformation", JSON.stringify(books));
  displayTitle.innerText = bookTitle.value;
  displayAuthor.innerText = author.value;
});

/* Remove book functionality */
remove.addEventListener("click", () => {
  books = JSON.parse(localStorage.getItem("booksInformation"));
  console.log(bookName.value);
  console.log(books);
  books.map((book, index) => {
    console.log("inside map");
    if (book.title === bookName.value) {
      console.log("insideif");
      console.log(index);
      books.splice(index, 1);
      console.log(books);
    }
    localStorage.setItem("booksInformation", JSON.stringify(books));
  });
});
