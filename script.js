import linksHandler from './modules/ui.js';
import BookCollection from './modules/book.js';
import time from './modules/time.js';

const bookCollection = new BookCollection();
document
  .getElementById('add-button')
  .addEventListener('click', bookCollection.addBook);
bookCollection.displayBooks();

linksHandler();
time();