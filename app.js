let myLibrary = [
    {
        title: "book1",
        author: "Arjun Singh",
        pages: 69,
        status: true
    },
    {
        title: "book2",
        author: "not Arjun",
        pages: 435,
        status: false
    },
    {
        title: "book3",
        author: "Also not Arjun",
        pages: 43534534,
        status: true
    }
];




function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function () {
        return `${title} by ${author},${pages} pages, isRead: ${isRead} `;
    }
    this.add = function () {

    }
}

function addBookToLibrary() {
    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        const bookTitle = document.createElement('h2')
        const bookAuthor = document.createElement('h3')
        const bookPages = document.createElement('p')
        const bookStatus = document.createElement('p')

        const newBook = new Book(book.title, book.author, book.pages, book.status)


        bookTitle.textContent = newBook.title;
        bookAuthor.textContent = newBook.author;
        bookPages.textContent = newBook.pages;



        if (book.status) {
            bookStatus.textContent = "Read";
        } else {
            bookStatus.textContent = "Not Read";
        }



        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookStatus);



        document.body.appendChild(bookCard)

    });
}

addBookToLibrary();

// Add a “NEW BOOK” button that brings up a form allowing users to input the details
// for the new book: author, title, number of pages, whether it’s been read and 
// anything else you might want.