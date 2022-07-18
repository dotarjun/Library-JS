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
}

function addBookToLibrary() {
    myLibrary.forEach(book => {
        const newBook = new Book(book.title, book.author, book.pages, book.status)
        bookCardCreator(newBook);
    });
}

addBookToLibrary();

function bookCardCreator(bookSource) {
    const bookCard = document.createElement('div');
    const bookTitle = document.createElement('h2')
    const bookAuthor = document.createElement('h3')
    const bookPages = document.createElement('p')
    const bookStatus = document.createElement('p')
    const toggleStatus = document.createElement('button')
    bookCard.setAttribute("class", "bookCard")
    bookTitle.textContent = bookSource.title;
    bookAuthor.textContent = bookSource.author;
    bookPages.textContent = bookSource.pages;
    bookSource.status ? bookStatus.textContent = 'Read' : bookStatus.textContent = 'Not Read';

    
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(toggleStatus)
    bookCard.appendChild(bookStatus);
    document.body.appendChild(bookCard)
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

// Add a button on each book’s display to change its read status.     
