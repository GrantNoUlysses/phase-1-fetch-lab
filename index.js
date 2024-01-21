function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      renderBooks(data);
      const fifthBook = data[4];
      if (fifthBook) {
        console.log('The 5th book in the series:', fifthBook.title);
      } else {
        console.log('The 5th book does not exist.');
      }
      const book1031 = data[1030];
      if (book1031 && book1031.characters && book1031.characters.length > 0) {
        const character1031 = book1031.characters[0];
        console.log('The 1031st character in the series:', character1031);
      } else {
        console.log('The 1031st character or its characters array does not exist.');
      }
      const totalPages = data.reduce((total, book) => total + book.numberOfPages, 0);
      console.log('The total number of pages of all the books:', totalPages);

      return fetch('https://anapioficeandfire.com/api/books');
    })
    .catch(error => console.error('Error fetching books:', error));
}

document.addEventListener('DOMContentLoaded', fetchBooks)













//fetch("https://anapioficeandfire.com/api/books") // Make a GET request to a URL
//.then(response => response.json())
//.then(books => {
//   const bookList = document.querySelector("#books");
//   colors.forEach(book => {
//   console.log(book.name)
//   const bookLi = document.createElement("li");
//   bookLi.textContent = book.name
//   bookList.append(bookLi)
//  });
// });








































//.catch(error => console.log(error));

//document.querySelector("#newBookForm").addEventListener("submit", event => {
 // event.preventDefault()
 // fetch("http://localhost:3000/huamms")
//})
















//  function renderBooks(books) {
 
 
 
 
 
 
 // const main = document.querySelector('main');
//  books.forEach(book => {
//    const h2 = document.createElement('h2');
   // h2.innerHTML = book.name;
   // main.appendChild(h2);
 // });
//}

//document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
//});
