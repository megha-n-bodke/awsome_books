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
    alert("in if block");
    books = JSON.parse(localStorage.getItem("booksInformation"));
    console.log(books);
    books.push({ title: bookTitle.value, author: author.value });
    displayTitle.innerText = bookTitle.value;
    displayTitle.innerText = displayAuthor.value;
  } else {
    alert("something wrong");
  }
  localStorage.setItem("booksInformation", JSON.stringify(books));
});

/* Remove book functionality */
remove.addEventListener("click", () => {
  alert("remove clicked");
  books = JSON.parse(localStorage.getItem("booksInformation"));
  console.log(books);
  books = books.splice(bookName.value, 1);
  localStorage.setItem("booksInformation", JSON.stringify(books));
  /* console.log(books); */
});
