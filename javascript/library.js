

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
    
    displayLibrary()
    }
    
    function displayLibrary() {
      const libraryContainer = document.getElementById("libraryContainer");
      libraryContainer.innerHTML = "";
    
      myLibrary.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.innerHTML = `
          <p>${book.title}</p>
          <p>${book.author}</p>
          <p>${book.pages}</p>
        `;
        libraryContainer.appendChild(card);
      });  
    
    }
      




