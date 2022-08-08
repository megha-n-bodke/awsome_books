const bookTitle = document.getElementById("title");
const author = document.getElementById("author");
const submitbtn = document.getElementById("submitbtn");

submitbtn.addEventListener("click", function (e) {
  /* alert(bookTitle.value); */
  /* books.push({ title: bookTitle.value, author: author.value });
  alert("book added");
  /*   console.log(books.pop()); */
  /* console.log(books);  */

  const books = [
    {
      title: "yayati",
      author: "ranjit desaie",
    },
    {
      title: "mrutyunjay",
      author: "p.deshpande",
    },
  ];

  /*   var singleBook = { title: bookTitle.value, author: author.value };
   */ /*   books = JSON.parse(localStorage.getItem(booksinfo));
   */ /*    books.push(singleBook);
   */ /*   console.log(books);
   */ books = window.localStorage.getItem("booksInformation");
  books.push(books);
  window.localStorage.setItem("booksInformation", JSON.stringify(books));
});
