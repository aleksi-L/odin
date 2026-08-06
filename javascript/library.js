const myLibrary = [{
    title: "Tuntematon sotilas",
    author: "Väinö Linna",
    pages: 500
  },

];

    function Book(title, author, pages) {
        this.title = title;
        this.author = author;
}

function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author);
    myLibrary.push(newBook);
}

function displayLibrary() {
    const libraryContainer = document.getElementById("library");
    libraryContainer.innerHTML = "";
}

myLibrary.forEach ((book, index) => {
  const card = document.createElement("div");
  card.classList.add("book-card");
});

console.log("heippa maailma");
