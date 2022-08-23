// start refactoring and using classes instead

let myLibrary = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        pages: 237,
        status: true
    },
    {
        title: "Psychology of Money",
        author: "Morgan Housel",
        pages: 435,
        status: false
    },
    {
        title: "Deep Work",
        author: "Cal Newport",
        pages: 536,
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
    this.__proto__.toggle = function () {
        return this.status = !this.status
    }

}

function addBookToLibrary() {
    myLibrary.forEach(book => {
        const newBook = new Book(book.title, book.author, book.pages, book.status)
        bookCardCreator(newBook);
    });
}

const libraryWrap = document.createElement('div')
document.body.appendChild(libraryWrap)
libraryWrap.classList.add('library-wrap')
addBookToLibrary();

function bookCardCreator(bookSource) {
    const bookCard = document.createElement('div');
    const bookTitle = document.createElement('h3')
    const bookAuthor = document.createElement('h4')
    const bookPages = document.createElement('p')
    const bookStatus = document.createElement('p')
    const toggleStatus = document.createElement('button')
    const bookDetails = document.createElement('div')
    const readStatus = document.createElement('div')

    bookCard.setAttribute("class", "bookCard")
    bookDetails.setAttribute("class", "book-details")
    readStatus.setAttribute("class", "read-status")


    bookTitle.textContent = bookSource.title;
    bookAuthor.textContent = bookSource.author;
    bookPages.textContent = `${bookSource.pages} pages`;
    toggleStatus.textContent = "🔁"
    bookSource.status ? bookStatus.textContent = 'Read' : bookStatus.textContent = 'Not Read';

    toggleStatus.addEventListener('click', function () {
        bookSource.status = !bookSource.status
        bookSource.status ? bookStatus.textContent = 'Read' : bookStatus.textContent = 'Not Read';

        bookCard.removeChild(bookStatus)
        bookCard.appendChild(bookStatus)
    })

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookDetails.appendChild(bookPages);
    readStatus.appendChild(toggleStatus)
    readStatus.appendChild(bookStatus);
    bookDetails.appendChild(readStatus)
    bookCard.appendChild(bookDetails)
    document.querySelector('.library-wrap').appendChild(bookCard)
    document.body.appendChild(libraryWrap)
}

const newBookButton = document.querySelector('.new-book')

newBookButton.addEventListener('click', function () {
    if (document.querySelector('form')) {
        document.body.querySelector('form').style.display = 'initial'
    }
    if (!document.querySelector('form')) {
        const bookForm = document.createElement('form');
        bookForm.setAttribute("id", "bookForm")
        bookForm.setAttribute("onsubmit", "return false");
        function inputLabelCreator(type, name, required = false, textContent) {
            const label = document.createElement('label')
            label.setAttribute("for", name);
            label.textContent = textContent;

            const input = document.createElement('input')
            input.setAttribute("type", type)
            input.setAttribute("name", name)
            input.setAttribute("id", name)
            input.required = required

            bookForm.appendChild(label);
            bookForm.appendChild(input);
        }
        inputLabelCreator("text", "title", true, "Book Title: ")
        inputLabelCreator("text", "author", true, "Author: ")
        inputLabelCreator("number", "pages", true, "Pages: ")
        inputLabelCreator("checkbox", "status", "", "Read ")
        const submitButton = document.createElement('button')
        submitButton.textContent = 'Add Book'
        submitButton.setAttribute("type", "submit")
        bookForm.appendChild(submitButton);
        document.body.appendChild(bookForm)
        submitButton.addEventListener('click', function () {
            const formDataAcquired = Array
                .from(document.querySelectorAll('form input'))
                .reduce((acc, input) =>
                    ({ ...acc, [input.id]: input.value }), {});
            myLibrary.push(formDataAcquired)
            formDataAcquired.status = document.getElementById('status').checked
            bookCardCreator(formDataAcquired);
            document.getElementById('title').value = ''
            document.getElementById('author').value = ''
            document.getElementById('pages').value = ''
            document.getElementById('status').checked = false
            document.getElementById("bookForm").remove()
        })
    }
})