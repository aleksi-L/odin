const myLibrary = [
  {
    title: "Tuntematon sotilas",
    author: "Väinö Linna",
    pages: "500",
    isRead: false
  }
];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = false;
}

Book.prototype.toggleRead = function() {
  this.isRead = !this.isRead;
};

function addBookToLibrary() {
  let a = document.getElementById("title").value;
  let b = document.getElementById("author").value;
  let c = document.getElementById("pages").value;

  const newBook = new Book(a, b, c);
  myLibrary.push(newBook);

  displayLibrary();
}

function displayLibrary() {
  const libraryContainer = document.getElementById("libraryContainer");
  libraryContainer.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <p>${book.title}</p>
      <p>${book.author}</p>
      <p>${book.pages}</p>
      <p>Status: ${book.isRead ? "Read" : "Not read"}</p>
      <button onclick="removeBook(${index})">Remove</button>
      <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
    `;

    libraryContainer.appendChild(card);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary();
}

function toggleReadStatus(index) {
  myLibrary[index].toggleRead();
  displayLibrary();
}
