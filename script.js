class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.addBook = this.addBook.bind(this);
    this.removeBook = this.removeBook.bind(this);
  }

  addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if (title && author) {
      this.books.push({ title, author });
      localStorage.setItem('books', JSON.stringify(this.books));
      this.displayBooks();
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    }
  }

  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  displayBooks() {
    const bookList = document.getElementById('books');
    bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const li = document.createElement('li');
      const h3 = document.createElement('h3');
      const removeButton = document.createElement('button');
      h3.textContent = `${book.title} by ${book.author}`;
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => this.removeBook(index));
      li.classList.add('book-item');
      li.appendChild(h3);
      li.appendChild(removeButton);
      bookList.appendChild(li);
    });
  }
}

const bookCollection = new BookCollection();
document
  .getElementById('add-button')
  .addEventListener('click', bookCollection.addBook);
bookCollection.displayBooks();

// Get the navigation links and content sections
const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

// Add click event listeners to the navigation links
links.forEach((link) => {
  link.addEventListener('click', () => {
    // Remove the "active" class from all links
    links.forEach((link) => link.classList.remove('active'));

    // Add the "active" class to the clicked link
    link.classList.add('active');

    // Hide all sections
    /* eslint-disable no-return-assign */
    sections.forEach((section) => section.style.display = 'none');

    // Show the section with the corresponding ID
    const sectionId = link.getAttribute('href').slice(1);
    document.getElementById(sectionId).style.display = 'block';
  });
});

// Show the first section by default
links[0].click();