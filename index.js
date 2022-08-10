const bookTitle = document.getElementById('title');
const author = document.getElementById('author');
const submitbtn = document.getElementById('submitbtn');
const displayDiv = document.getElementById('display');

/* display data */
let contentDiv = '';
let books = [];
document.addEventListener('DOMContentLoaded', () => {
  const display = () => {
    if (localStorage.getItem('booksInformation')) {
      books = JSON.parse(localStorage.getItem('booksInformation'));
    } else {
      localStorage.setItem('booksInformation', JSON.stringify(books));
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

  submitbtn.addEventListener('click', () => {
    if (bookTitle.value === '' || author.value === '') {
      alert('please enter data');
    } else {
      if (localStorage.getItem('booksInformation') === null) {
        books.push({ title: bookTitle.value, author: author.value });
        localStorage.setItem('booksInformation', JSON.stringify(books));
      } else {
        books = JSON.parse(localStorage.getItem('booksInformation'));
        books.push({ title: bookTitle.value, author: author.value });
        localStorage.setItem('booksInformation', JSON.stringify(books));
      }

      contentDiv = '';
      displayDiv.innerHTML = contentDiv;
      alert('data submitted successfully');
      bookTitle.value = '';
      author.value = '';
      display();
    }
  });
  display();

  removeDiv = (id) => {
    books = JSON.parse(localStorage.getItem('booksInformation'));
    books.splice(id, 1);
    localStorage.setItem('booksInformation', JSON.stringify(books));
    contentDiv = '';
    displayDiv.innerHTML = contentDiv;
    display();
  };
});