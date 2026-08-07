/* 
  1. html, miten saadaan inputtien tiedot funktio kutsuun ja listättyä array taulukon jatkoksi. 
  2. miten saat listan näkyville html:ssä, kun tiedot on syötetty. 
  
*/

const myLibrary = [{
    title: "Tuntematon sotilas",
    author: "Väinö Linna",
    pages: "500"
  }
];

    function Book(title, author, pages) {
        this.title = title;
        this.author = author; 
        this.pages =pages;
}

function addBookToLibrary(title, author, pages) {
    
    let a = document.getElementById("title").value;
    let b = document.getElementById("author").value;
    let c = document.getElementById("pages").value;

    const newBook = new Book(a, b, c,);

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


