const bookTitle = document.getElementById("title");
const author = document.getElementById("author");
const submitbtn = document.getElementById("submitbtn");
const displayDiv = document.getElementById("display");
const errorMsg = document.getElementById("emptySpan");
let contentDiv = "";

/* class declaration for book */
let books = [];
class SingleBook {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }

  /* Book add functionality */
  addBook() {
    const bookName = bookTitle.value;
    const authorName = author.value;
    const book = new SingleBook(bookName, authorName);

    /* store in localstorage */
    if (bookTitle.value === "" || author.value === "") {
      errorMsg.innerText = "please enter data";
    } else if (localStorage.getItem("booksInfo") === null) {
      books.push(book);
      localStorage.setItem("booksInfo", JSON.stringify(books));
    } else {
      books = JSON.parse(localStorage.getItem("booksInfo"));
      books.push(book);
      localStorage.setItem("booksInfo", JSON.stringify(books));
    }

    contentDiv = "";
    bookTitle.value = "";
    author.value = "";
    displayDiv.innerHTML = contentDiv;
    this.display();
  }

  /* display  localstorage data */
  display() {
    if (localStorage.getItem("booksInfo")) {
      books = JSON.parse(localStorage.getItem("booksInfo"));
    } else {
      alert("in else block");
      localStorage.setItem("booksInfo", JSON.stringify(books));
    }

    books.map((singlebook, index) => {
      contentDiv += `
                <div class = "data">
                <p >"${singlebook.name}" by ${singlebook.author}</p>
                <button id="btn" onclick='removeDiv(${index})'>Remove</button>
                </div>
              `;

      return contentDiv;
    });
    displayDiv.innerHTML = contentDiv;
  }

  /* remove book functionality */
  remove(id) {
    books = JSON.parse(localStorage.getItem("booksInfo"));
    books.splice(id, 1);
    localStorage.setItem("booksInfo", JSON.stringify(books));
    contentDiv = "";
    displayDiv.innerHTML = contentDiv;
    this.display();
  }
}

/* on page load display data of local storage */
document.addEventListener("DOMContentLoaded", () => {
  const book = new SingleBook();
  book.display();
});

/* add book functionality */
submitbtn.addEventListener("click", () => {
  const book = new SingleBook();
  book.addBook();
});

removeDiv = (id) => {
  const book = new SingleBook();
  book.remove(id);
};
