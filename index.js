const bookTitle = document.getElementById("title");
const author = document.getElementById("author");
const submitbtn = document.getElementById("submitbtn");
const displayDiv = document.getElementById("display");
const errorMsg = document.getElementById("emptySpan");
let contentDiv = "";

/* const displayDiv = document.getElementById("display");
 */
/* display data */
/* let contentDiv = "";
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
 */

/* class declaration for book */
let books = [];
class SingleBook {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }

  /* Book add functionality */
  addBook() {
    let bookName = bookTitle.value;
    let authorName = author.value;
    const book = new SingleBook(bookName, authorName);

    /* store in localstorage */
    if (localStorage.getItem("booksInfo") === null) {
      books.push(book);
      localStorage.setItem("booksInfo", JSON.stringify(books));
    } else {
      books = JSON.parse(localStorage.getItem("booksInfo"));
      books.push(book);
      localStorage.setItem("booksInfo", JSON.stringify(books));
    }

    contentDiv = "";
    alert("data submitted successfully");
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
                <p>${singlebook.name} by ${singlebook.author}</p>
                <button id="btn" onclick='removeDiv(${index})'>Remove</button>
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
