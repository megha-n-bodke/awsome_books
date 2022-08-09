const bookTitle = document.getElementById("title");
const author = document.getElementById("author");
const submitbtn = document.getElementById("submitbtn");

submitbtn.addEventListener("click", () => {
  let books = [];

  if (localStorage.getItem("booksInformation")) {
    alert("in if block");
    books = JSON.parse(localStorage.getItem("booksInformation"));
    console.log(books);
    books.push({ title: bookTitle.value, author: author.value });
  } else {
    alert("something wrong");
  }

  localStorage.setItem("booksInformation", JSON.stringify(books));
});
