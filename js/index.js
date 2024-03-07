console.log('Books:', JSON.stringify(books, null, 2));

// Display the original books array
const originalBooksContainer = document.createElement('div');
originalBooksContainer.classList.add('original-books');
originalBooksContainer.innerHTML = `
  <h2>Original Books Array:</h2>
  <div class="code-block">
    <pre>${JSON.stringify(books, null, 2)}</pre>
  </div>
`;
document.getElementById('original-books').appendChild(originalBooksContainer);

// Example 1: map() - Create an array of book titles
const example1 = document.createElement('div');
const bookTitles = books.map(({ title }) => title);
console.log('Book Titles:', bookTitles);
example1.classList.add('example');
example1.innerHTML = `
  <h3>1. map() - Create an array of book titles</h3>
  <div class="code-block">
    <pre>${JSON.stringify(bookTitles, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example1);

// Example 2: filter() - Get investing books with a rating above 4.5
const example2 = document.createElement('div');
const highRatedInvestingBooks = books.filter(({ genre, rating }) => genre === 'Investing' && rating > 4.5);
console.log('High Rated Investing Books:', highRatedInvestingBooks);
example2.classList.add('example');
example2.innerHTML = `
  <h3>2. filter() - Get investing books with a rating above 4.5</h3>
  <div class="code-block">
    <pre>${JSON.stringify(highRatedInvestingBooks, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example2);

// Example 3: reduce() - Calculate the total price of all books
const example3 = document.createElement('div');
const totalPrice = books.reduce((total, { price }) => total + price, 0);
console.log('Total Price:', totalPrice.toFixed(2));
example3.classList.add('example');
example3.innerHTML = `
  <h3>3. reduce() - Calculate the total price of all books</h3>
  <div class="code-block">
    <h4>Total Price:</h4>
    <pre>$${totalPrice.toFixed(2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example3);

// Example 4: find() - Find the first book published before 1950
const example4 = document.createElement('div');
const bookBefore1950 = books.find(({ publicationYear }) => publicationYear < 1950);
console.log('Book published before 1950:', bookBefore1950);
example4.classList.add('example');
example4.innerHTML = `
  <h3>4. find() - Find the first book published before 1950</h3>
  <div class="code-block">
    <pre>${JSON.stringify(bookBefore1950, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example4);

// Example 5: every() - Check if all books have a rating above 4
const example5 = document.createElement('div');
const allBooksHighlyRated = books.every(({ rating }) => rating > 4);
console.log('All books highly rated:', allBooksHighlyRated);
example5.classList.add('example');
example5.innerHTML = `
  <h3>5. every() - Check if all books have a rating above 4</h3>
  <div class="code-block">
    <h4>All books highly rated:</h4>
    <pre>${allBooksHighlyRated}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example5);

// Example 6: some() - Check if any book is in the "Personal Finance" genre
const example6 = document.createElement('div');
const hasPersonalFinanceBook = books.some(({ genre }) => genre === 'Personal Finance');
console.log('Has Personal Finance book:', hasPersonalFinanceBook);
example6.classList.add('example');
example6.innerHTML = `
  <h3>6. some() - Check if any book is in the "Personal Finance" genre</h3>
  <div class="code-block">
    <h4>Has Personal Finance book:</h4>
    <pre>${hasPersonalFinanceBook}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example6);

// Example 7: sort() - Sort books by price in descending order
const example7 = document.createElement('div');
const booksSortedByPriceDesc = [...books].sort((a, b) => b.price - a.price);
console.log('Books sorted by price (descending):', booksSortedByPriceDesc);
example7.classList.add('example');
example7.innerHTML = `
  <h3>7. sort() - Sort books by price in descending order</h3>
  <div class="code-block">
    <pre>${JSON.stringify(booksSortedByPriceDesc, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example7);

// Example 8: forEach() - Log book titles and authors
const example8 = document.createElement('div');
console.log('Book titles and authors:');
books.forEach(({ title, author }) => {
  console.log(`- ${title} by ${author}`);
});
example8.classList.add('example');
example8.innerHTML = `
  <h3>8. forEach() - Log book titles and authors</h3>
  <div class="code-block">
    <pre>${books.map(({ title, author }) => `- ${title} by ${author}`).join('\n')}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example8);

// Example 9: includes() - Check if the books array includes a specific book
const example9 = document.createElement('div');
const includesRichDadPoorDad = bookTitles.includes('Rich Dad Poor Dad');
const includesTheLeanStartup = bookTitles.includes('The Lean Startup');
example9.classList.add('example');
example9.innerHTML = `
  <h3>9. includes() - Check if the books array includes a specific book</h3>
  <div class="code-block">
    <h4>Includes "Rich Dad Poor Dad":</h4>
    <pre>${includesRichDadPoorDad}</pre>
  </div>
  <div class="code-block">
    <h4>Includes "The Lean Startup":</h4>
    <pre>${includesTheLeanStartup}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example9);

// Example 10: flatMap() and reduce() - Create an object with author names and their book counts
const example10 = document.createElement('div');
const authorBookCounts = books
  .flatMap(({ author }) => [[author, 1]])
  .reduce((counts, [author, count]) => ({ ...counts, [author]: (counts[author] || 0) + count }), {});
console.log('Author book counts:', authorBookCounts);
example10.classList.add('example');
example10.innerHTML = `
  <h3>10. flatMap() and reduce() - Create an object with author names and their book counts</h3>
  <div class="code-block">
    <pre>${JSON.stringify(authorBookCounts, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example10);

// Example 11: filter() and map() - Get the titles of self-help books
const example11 = document.createElement('div');
const selfHelpBookTitles = books
  .filter(({ genre }) => genre === 'Self-Help')
  .map(({ title }) => title);
console.log('Self-help book titles:', selfHelpBookTitles);
example11.classList.add('example');
example11.innerHTML = `
  <h3>11. filter() and map() - Get the titles of self-help books</h3>
  <div class="code-block">
    <pre>${JSON.stringify(selfHelpBookTitles, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example11);

// Example 12: reduce() - Find the book with the highest rating
const example12 = document.createElement('div');
const highestRatedBook = books.reduce((highest, book) => (book.rating > highest.rating ? book : highest));
console.log('Highest rated book:', highestRatedBook);
example12.classList.add('example');
example12.innerHTML = `
  <h3>12. reduce() - Find the book with the highest rating</h3>
  <div class="code-block">
    <pre>${JSON.stringify(highestRatedBook, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example12);

// Example 13: sort() and map() - Sort books by publication year and create an array of formatted strings
const example13 = document.createElement('div');
const booksByPublicationYear = [...books]
  .sort((a, b) => a.publicationYear - b.publicationYear)
  .map(({ title, publicationYear }) => `${title} (${publicationYear})`);
console.log('Books by publication year:', booksByPublicationYear);
example13.classList.add('example');
example13.innerHTML = `
  <h3>13. sort() and map() - Sort books by publication year and create an array of formatted strings</h3>
  <div class="code-block">
    <pre>${JSON.stringify(booksByPublicationYear, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example13);

// Example 14: reduce() - Calculate the average rating of all books
const example14 = document.createElement('div');
const averageRating = books.reduce((sum, { rating }, index, array) => {
  sum += rating;
  return index === array.length - 1 ? (sum / array.length).toFixed(2) : sum;
}, 0);
console.log('Average rating:', averageRating);
example14.classList.add('example');
example14.innerHTML = `
  <h3>14. reduce() - Calculate the average rating of all books</h3>
  <div class="code-block">
    <h4>Average rating:</h4>
    <pre>${averageRating}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example14);

// Example 15: filter(), sort(), and slice() - Get the top 3 rated books
const example15 = document.createElement('div');
const top3RatedBooks = books
  .filter(({ rating }) => rating >= 4.5)
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);
console.log('Top 3 rated books:', top3RatedBooks);
example15.classList.add('example');
example15.innerHTML = `
  <h3>15. filter(), sort(), and slice() - Get the top 3 rated books</h3>
  <div class="code-block">
    <pre>${JSON.stringify(top3RatedBooks, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example15);

// Example 16: reduce() - Create an object with genre as key and an array of book titles as value
const example16 = document.createElement('div');
const booksByGenre = books.reduce((genres, book) => {
  const { genre, title } = book;
  genres[genre] = [...(genres[genre] || []), title];
  return genres;
}, {});
console.log('Books by genre:', booksByGenre);
example16.classList.add('example');
example16.innerHTML = `
  <h3>16. reduce() - Create an object with genre as key and an array of book titles as value</h3>
  <div class="code-block">
    <pre>${JSON.stringify(booksByGenre, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example16);

// Example 17: Destructuring and rest operator - Find the book with the lowest price
const example17 = document.createElement('div');
const [cheapestBook, ...otherBooks] = [...books].sort((a, b) => a.price - b.price);
console.log('Cheapest book:', cheapestBook);
console.log('Other books:', otherBooks);
example17.classList.add('example');
example17.innerHTML = `
  <h3>17. Destructuring and rest operator - Find the book with the lowest price</h3>
  <div class="code-block">
    <h4>Cheapest book:</h4>
    <pre>${JSON.stringify(cheapestBook, null, 2)}</pre>
  </div>
  <div class="code-block">
    <h4>Other books:</h4>
    <pre>${JSON.stringify(otherBooks, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example17);

// Example 18: Set - Get unique genres
const example18 = document.createElement('div');
const uniqueGenres = [...new Set(books.map(({ genre }) => genre))];
console.log('Unique genres:', uniqueGenres);
example18.classList.add('example');
example18.innerHTML = `
  <h3>18. Set - Get unique genres</h3>
  <div class="code-block">
    <pre>${JSON.stringify(uniqueGenres, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example18);

// Example 19: Array.from() and Set - Remove duplicate books based on title
const example19 = document.createElement('div');
const uniqueBooks = Array.from(new Set(books.map(JSON.stringify))).map(JSON.parse);
console.log('Unique books:', uniqueBooks);
example19.classList.add('example');
example19.innerHTML = `
  <h3>19. Array.from() and Set - Remove duplicate books based on title</h3>
  <div class="code-block">
    <pre>${JSON.stringify(uniqueBooks, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example19);

// Example 20: Optional chaining and nullish coalescing - Get the author of the first book or default to 'Unknown'
const example20 = document.createElement('div');
const firstAuthor = books[0]?.author ?? 'Unknown';
console.log('First author:', firstAuthor);
example20.classList.add('example');
example20.innerHTML = `
  <h3>20. Optional chaining and nullish coalescing - Get the author of the first book or default to 'Unknown'</h3>
  <div class="code-block">
    <h4>First author:</h4>
    <pre>${firstAuthor}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example20);

// Example 21: Array.isArray() - Check if a value is an array
const example21 = document.createElement('div');
const isArray = (value) => Array.isArray(value);
example21.classList.add('example');
example21.innerHTML = `
  <h3>21. Array.isArray() - Check if a value is an array</h3>
  <div class="code-block">
    <h4>Is books an array?:</h4>
    <pre>${isArray(books)}</pre>
  </div>
  <div class="code-block">
    <h4>Is "Hello" an array?:</h4>
    <pre> ${isArray('Hello')}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example21);

// Example 22: Spread operator - Merge two arrays
const example22 = document.createElement('div');
const moreBooksToRead = [
  {
    title: 'The Lean Startup',
    author: 'Eric Ries',
    genre: 'Business',
    rating: 4.5,
    price: 12.99,
    publicationYear: 2011
  },
  {
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    genre: 'Self-Help',
    rating: 4.6,
    price: 11.99,
    publicationYear: 2012
  }
];
const allBooksToRead = [...books, ...moreBooksToRead];
console.log('All books to read:', allBooksToRead);
example22.classList.add('example');
example22.innerHTML = `
  <h3>22. Spread operator - Merge two arrays</h3>
  <div class="code-block">
    <pre>${JSON.stringify(allBooksToRead, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example22);

// Example 23: Array.prototype.at() - Get the last book in the array
const example23 = document.createElement('div');
const lastBook = books.at(-1);
console.log('Last book:', lastBook);
example23.classList.add('example');
example23.innerHTML = `
  <h3>23. Array.prototype.at() - Get the last book in the array</h3>
  <div class="code-block">
    <pre>${JSON.stringify(lastBook, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example23);

// Example 24: Array.prototype.groupBy() - Group books by genre (using a polyfill for demonstration)
const example24 = document.createElement('div');
if (!Array.prototype.groupBy) {
  Array.prototype.groupBy = function(callback) {
    return this.reduce((acc, item) => {
      const key = callback(item);
      acc[key] = [...(acc[key] || []), item];
      return acc;
    }, {});
  };
}
const booksByGenreUsingGroupBy = books.groupBy(({ genre }) => genre);
console.log('Books by genre using groupBy():', booksByGenreUsingGroupBy);
example24.classList.add('example');
example24.innerHTML = `
  <h3>24. Array.prototype.groupBy() - Group books by genre (using a polyfill for demonstration)</h3>
  <div class="code-block">
    <pre>${JSON.stringify(booksByGenreUsingGroupBy, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example24);

// Example 25: Array.prototype.findLast() - Find the last book with a rating above 4.5 (using a polyfill for demonstration)
const example25 = document.createElement('div');
if (!Array.prototype.findLast) {
  Array.prototype.findLast = function(callback) {
    return this.slice().reverse().find(callback);
  };
}
const lastHighlyRatedBook = books.findLast(({ rating }) => rating > 4.5);
console.log('Last highly rated book:', lastHighlyRatedBook);
example25.classList.add('example');
example25.innerHTML = `
  <h3>25. Array.prototype.findLast() - Find the last book with a rating above 4.5 (using a polyfill for demonstration)</h3>
  <div class="code-block">
    <h4>Last highly rated book:</h4>
    <pre>${JSON.stringify(lastHighlyRatedBook, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example25);

// Example 26: Array.prototype.findIndex() - Find the index of the first book with a price less than 10
const example26 = document.createElement('div');
const indexOfCheapBook = books.findIndex(({ price }) => price < 10);
console.log('Index of the first cheap book:', indexOfCheapBook);
example26.classList.add('example');
example26.innerHTML = `
  <h3>26. Array.prototype.findIndex() - Find the index of the first book with a price less than 10</h3>
  <div class="code-block">
    <h4>Index of the first cheap book:</h4>
    <pre>${indexOfCheapBook}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example26);

// Example 27: Array.prototype.fill() - Fill an array with a specific book
const example27 = document.createElement('div');
const filledArray = new Array(3).fill(books[0]);
console.log('Filled array:', filledArray);
example27.classList.add('example');
example27.innerHTML = `
  <h3>27. Array.prototype.fill() - Fill an array with a specific book</h3>
  <div class="code-block">
    <pre>${JSON.stringify(filledArray, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example27);

// Example 28: Array.prototype.flatMap() - Create an array of authors with their book titles
const example28 = document.createElement('div');
const authorsWithBookTitles = books.flatMap(({ author, title }) => [[author, title]]);
console.log('Authors with book titles:', authorsWithBookTitles);
example28.classList.add('example');
example28.innerHTML = `
  <h3>28. Array.prototype.flatMap() - Create an array of authors with their book titles</h3>
  <div class="code-block">
    <pre>${JSON.stringify(authorsWithBookTitles, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example28);

// Example 29: Array.prototype.copyWithin() - Copy a portion of an array to another location
const example29 = document.createElement('div');
const copiedArray = [...books].copyWithin(2, 0, 2);
console.log('Copied array:', copiedArray);
example29.classList.add('example');
example29.innerHTML = `
  <h3>29. Array.prototype.copyWithin() - Copy a portion of an array to another location</h3>
  <div class="code-block">
    <pre>${JSON.stringify(copiedArray, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example29);

// Example 30: Array.prototype.entries() - Create an iterator object with key-value pairs
const example30 = document.createElement('div');
const arrayEntries = books.entries();
console.log('Array entries:');
for (const [index, book] of arrayEntries) {
  console.log(`Index: ${index}, Book: ${book.title}`);
}
example30.classList.add('example');
example30.innerHTML = `
  <h3>30. Array.prototype.entries() - Create an iterator object with key-value pairs</h3>
  <div class="code-block">
    <pre>${[...books.entries()].map(([index, book]) => `Index: ${index}, Book: ${book.title}`).join('\n')}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example30);

// Example 31: Array.prototype.keys() - Create an iterator object with keys
const example31 = document.createElement('div');
const arrayKeys = books.keys();
console.log('Array keys:');
for (const key of arrayKeys) {
  console.log(`Key: ${key}`);
}
example31.classList.add('example');
example31.innerHTML = `
  <h3>31. Array.prototype.keys() - Create an iterator object with keys</h3>
  <div class="code-block">
    <pre>${[...books.keys()].map(key => `Key: ${key}`).join('\n')}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example31);

// Example 32: Array.prototype.values() - Create an iterator object with values
const example32 = document.createElement('div');
const arrayValues = books.values();
console.log('Array values:');
for (const value of arrayValues) {
  console.log(`Value: ${value.title}`);
}
example32.classList.add('example');
example32.innerHTML = `
  <h3>32. Array.prototype.values() - Create an iterator object with values</h3>
  <div class="code-block">
    <pre>${[...books.values()].map(value => `Value: ${value.title}`).join('\n')}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example32);

// Example 33: Array.prototype.reduceRight() - Concatenate book titles from right to left
const example33 = document.createElement('div');
const reverseTitles = books.reduceRight((acc, { title }) => `${acc} -> ${title}`, '');
console.log('Reverse titles:', reverseTitles);
example33.classList.add('example');
example33.innerHTML = `
  <h3>33. Array.prototype.reduceRight() - Concatenate book titles from right to left</h3>
  <div class="code-block">
    <h4>Reverse titles:</h4>
    <pre>${reverseTitles}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example33);

// Example 34: Array.of() - Create a new array from a variable number of arguments
const example34 = document.createElement('div');
const newArray = Array.of(1, 2, 3, 4, 5);
console.log('New array:', newArray);
example34.classList.add('example');
example34.innerHTML = `
  <h3>34. Array.of() - Create a new array from a variable number of arguments</h3>
  <div class="code-block">
    <h4>New array:</h4>
    <pre>${JSON.stringify(newArray)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example34);

// Example 35: Array.prototype.join() - Join book titles into a single string
const example35 = document.createElement('div');
const joinedTitles = books.map(({ title }) => title).join(', ');
console.log('Joined titles:', joinedTitles);
example35.classList.add('example');
example35.innerHTML = `
  <h3>35. Array.prototype.join() - Join book titles into a single string</h3>
  <div class="code-block">
    <h4>Joined titles: </h4>
    <pre>${joinedTitles}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example35);

// Example 36: Array.prototype.toLocaleString() - Convert book objects to locale-specific strings
const example36 = document.createElement('div');
const localizedBooks = books.map(book => {
  return {
    title: book.title,
    author: book.author,
    price: book.price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  };
});
console.log('Localized books:', localizedBooks);
example36.classList.add('example');
example36.innerHTML = `
  <h3>36. Array.prototype.toLocaleString() - Convert book objects to locale-specific strings</h3>
  <div class="code-block">
    <pre>${localizedBooks.map(book => `${book.title} by ${book.author} - ${book.price}`).join('\n')}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example36);

// Example 37: Array.prototype.push() and Array.prototype.pop() - Add and remove books from the end of the array
const example37 = document.createElement('div');
const bookStack = [];
bookStack.push(books[0], books[1]);
const poppedBook = bookStack.pop();
example37.classList.add('example');
example37.innerHTML = `
<h3>37. Array.prototype.push() and Array.prototype.pop() - Add and remove books from the end of the array</h3>
  <div class="code-block">
    <h4>Book stack after push:</h4>
    <pre>${JSON.stringify(bookStack, null, 2)}</pre>
  </div>
  <div class="code-block">
    <h4>Popped book:</h4>
    <pre>${JSON.stringify(poppedBook, null, 2)}</pre>
  </div>
  <div class="code-block">
    <h4>Book stack after pop:</h4>
    <pre>${JSON.stringify(bookStack, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example37);

// Example 38: Array.prototype.shift() and Array.prototype.unshift() - Add and remove books from the beginning of the array
const example38 = document.createElement('div');
const bookQueue = [];
bookQueue.unshift(books[0], books[1]);
const shiftedBook = bookQueue.shift();
example38.classList.add('example');
example38.innerHTML = `
  <h3>38. Array.prototype.shift() and Array.prototype.unshift() - Add and remove books from the beginning of the array</h3>
  <div class="code-block">
    <h4>Book queue after unshift:</h4>
    <pre>${JSON.stringify(bookQueue, null, 2)}</pre>
  </div>
  <div class="code-block">
    <h4>Shifted book:</h4>
    <pre>${JSON.stringify(shiftedBook, null, 2)}</pre>
  </div>
  <div class="code-block">
    <h4>Book queue after shift:</h4>
    <pre>${JSON.stringify(bookQueue, null, 2)}</pre>
  </div>
`;
document.getElementById('examples').appendChild(example38);
