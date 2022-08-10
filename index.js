<<<<<<< HEAD
const bookTitle = document.getElementById('title');
const author = document.getElementById('author');
const submitbtn = document.getElementById('submitbtn');
const displayTitle = document.getElementById('displayTitle');
const displayAuthor = document.getElementById('displayAuthor');
const remove = document.getElementById('removebtn');
const bookName = document.getElementById('bookName');

/* Book add functionality */
submitbtn.addEventListener('click', () => {
  let books = [];
  if (localStorage.getItem('booksInformation')) {
    books = JSON.parse(localStorage.getItem('booksInformation'));
    books.push({ title: bookTitle.value, author: author.value });
  } /* else {
    books.push({ title: bookTitle.value, author: author.value });
    displayTitle.innerText = bookTitle.value;
    displayTitle.innerText = displayAuthor.value;
  } */
  localStorage.setItem('booksInformation', JSON.stringify(books));
  displayTitle.innerText = bookTitle.value;
  displayAuthor.innerText = author.value;
});

/* Remove book functionality */
remove.addEventListener('click', () => {
  books = JSON.parse(localStorage.getItem('booksInformation'));
  console.log(bookName.value);
  console.log(books);
  books.map((book, index) => {
    console.log('inside map');
    if (book.title === bookName.value) {
      console.log('insideif');
      console.log(index);
      books.splice(index, 1);
      console.log(books);
    }
    localStorage.setItem('booksInformation', JSON.stringify(books));
    return localStorage;
  });
});
=======
const bookTitle = document.getElementById("title");
const author = document.getElementById("author");
const submitbtn = document.getElementById("submitbtn");
const displayDiv = document.getElementById("display");

/* display data */
let contentDiv = "";
let books = [];
document.addEventListener("DOMContentLoaded", () => {
  const display = () => {
    if (localStorage.getItem("booksInformation")) {
      books = JSON.parse(localStorage.getItem("booksInformation"));
    } else {
      localStorage.setItem("booksInformation", JSON.stringify(books));
    }

    books.map((singlebook, index) => {
      contentDiv += `
                <h1>${singlebook.title}</h1>
                <h2>${singlebook.author}</h2>
                <button id="btn" onclick='removeDiv(${index})'>Remove</button>
              <hr/>`;

      return contentDiv;
    });
    displayDiv.innerHTML = contentDiv;
  };

  submitbtn.addEventListener("click", () => {
    if (bookTitle.value === "" || author.value === "") {
      alert("please enter data");
    } else {
      if (localStorage.getItem("booksInformation") === null) {
        books.push({ title: bookTitle.value, author: author.value });
        localStorage.setItem("booksInformation", JSON.stringify(books));
      } else {
        books = JSON.parse(localStorage.getItem("booksInformation"));
        books.push({ title: bookTitle.value, author: author.value });
        localStorage.setItem("booksInformation", JSON.stringify(books));
      }

      contentDiv = "";
      displayDiv.innerHTML = contentDiv;
      alert("data submitted successfully");
      bookTitle.value = "";
      author.value = "";
      display();
    }
  });
  display();

  removeDiv = (id) => {
    books = JSON.parse(localStorage.getItem("booksInformation"));
    books.splice(id, 1);
    localStorage.setItem("booksInformation", JSON.stringify(books));
    contentDiv = "";
    displayDiv.innerHTML = contentDiv;
    display();
  };
});
>>>>>>> 574b2c8404e475c6d09d1e8f455ea8228afc3237
