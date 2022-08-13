const contact = document.getElementById('contact-details');
const form = document.getElementById('books-form');
const booksDetails = document.getElementById('book-display');
const booklink = document.getElementById('bookList');
const formlink = document.getElementById('addBook');
const contactLink = document.getElementById('contact');

/* remove book functionality */

const bookTitle = document.getElementById('title');
const author = document.getElementById('author');
const submitbtn = document.getElementById('submitbtn');
const displayDiv = document.getElementById('display');
const errorMsg = document.getElementById('emptySpan');
let contentDiv = '';

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
    if (bookTitle.value === '' || author.value === '') {
      errorMsg.innerText = 'please enter data';
    } else if (localStorage.getItem('booksInfo') === null) {
      books.push(book);
      localStorage.setItem('booksInfo', JSON.stringify(books));
    } else {
      books = JSON.parse(localStorage.getItem('booksInfo'));
      books.push(book);
      localStorage.setItem('booksInfo', JSON.stringify(books));
    }

    contentDiv = '';
    bookTitle.value = '';
    author.value = '';
    displayDiv.innerHTML = contentDiv;
    this.display();
  }

  /* display  localstorage data */
  display() {
    if (localStorage.getItem('booksInfo')) {
      books = JSON.parse(localStorage.getItem('booksInfo'));
    } else {
      alert('in else block');
      localStorage.setItem('booksInfo', JSON.stringify(books));
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
    booklink.style.color = 'blue';
    displayDiv.innerHTML = contentDiv;
  }

  remove(id) {
    books = JSON.parse(localStorage.getItem('booksInfo'));
    books.splice(id, 1);
    localStorage.setItem('booksInfo', JSON.stringify(books));
    contentDiv = '';
    displayDiv.innerHTML = contentDiv;
    this.display();
  }

  /* display books */
  displayBooks() {
    booksDetails.classList.add('show-books');
    booksDetails.classList.remove('remove-books');
    form.classList.remove('show-form');
    contact.classList.remove('show-contact');
    booklink.style.color = 'blue';
    formlink.style.color = 'black';
    contactLink.style.color = 'black';
  }

  displayForm() {
    booksDetails.classList.remove('show-books');
    booksDetails.classList.add('remove-books');
    form.classList.add('show-form');
    contact.classList.remove('show-contact');
    booklink.style.color = 'black';
    formlink.style.color = 'blue';
    contactLink.style.color = 'black';
  }

  displayContact() {
    booksDetails.classList.remove('show-books');
    booksDetails.classList.add('remove-books');
    form.classList.remove('show-form');
    contact.classList.add('show-contact');
    booklink.style.color = 'black';
    formlink.style.color = 'black';
    contactLink.style.color = 'blue';
  }
}

/* on page load display data of local storage */
document.addEventListener('DOMContentLoaded', () => {
  const book = new SingleBook();
  book.display();

  /* add book functionality */
  submitbtn.addEventListener('click', () => {
    const book = new SingleBook();
    book.addBook();
  });

  removeDiv = (id) => {
    const book = new SingleBook();
    book.remove(id);
  };

  booklink.addEventListener('click', () => {
    const book = new SingleBook();
    book.displayBooks();
  });

  formlink.addEventListener('click', () => {
    const book = new SingleBook();
    book.displayForm();
  });

  contactLink.addEventListener('click', () => {
    const book = new SingleBook();
    book.displayContact();
  });
});
