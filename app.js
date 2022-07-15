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





// Add a “NEW BOOK” button that brings up a form allowing users to input the details
// for the new book: author, title, number of pages, whether it’s been read and 
// anything else you might want.

const newBookButton = document.querySelector('.new-book')



newBookButton.addEventListener('click', function () {

    if (document.querySelector('form')) {
        document.body.querySelector('form').style.display = 'initial'
    }

    if (!document.querySelector('form')) {
        const bookForm = document.createElement('form');
        bookForm.setAttribute("onsubmit", "return false");

        



        const formBookTitleLabel = document.createElement('label')
        const formBookTitleInput = document.createElement('input')

        formBookTitleLabel.textContent = "Book Title: "

        formBookTitleLabel.setAttribute("for", "title")
        formBookTitleInput.setAttribute("type", "text")
        formBookTitleInput.setAttribute("name", "title")
        formBookTitleInput.setAttribute("id", "title")
        formBookTitleInput.required = true;

        bookForm.appendChild(formBookTitleLabel)
        bookForm.appendChild(formBookTitleInput)


        const formBookAuthorLabel = document.createElement('label')
        const formBookAuthorInput = document.createElement('input')

        formBookAuthorLabel.textContent = "Author: "
        formBookAuthorLabel.setAttribute("for", "author")

        formBookAuthorInput.setAttribute("type", "text")
        formBookAuthorInput.setAttribute("name", "author")
        formBookAuthorInput.setAttribute("id", "author")
        formBookAuthorInput.required = true;

        bookForm.appendChild(formBookAuthorLabel)
        bookForm.appendChild(formBookAuthorInput)


        const formBookPagesLabel = document.createElement('label')
        const formBookPagesInput = document.createElement('input')

        formBookPagesLabel.textContent = "Pages: "
        formBookPagesLabel.setAttribute("for", "pages")

        formBookPagesInput.setAttribute("type", "number")
        formBookPagesInput.setAttribute("name", "pages")
        formBookPagesInput.setAttribute("id", "pages")
        formBookPagesInput.required = true;

        bookForm.appendChild(formBookPagesLabel)
        bookForm.appendChild(formBookPagesInput)


        const formBookStatusLabel = document.createElement('label')
        const formBookStatusInput = document.createElement('input')

        formBookStatusLabel.textContent = "Read? "
        formBookStatusLabel.setAttribute("for", "status")

        formBookStatusInput.setAttribute("type", "checkbox")
        formBookStatusInput.setAttribute("name", "status")
        formBookStatusInput.setAttribute("id", "status")

        bookForm.appendChild(formBookStatusLabel)
        bookForm.appendChild(formBookStatusInput)


        const submitButton = document.createElement('button')
        submitButton.textContent = 'Add Book'
        submitButton.setAttribute("type", "submit")
        bookForm.appendChild(submitButton);
        document.body.appendChild(bookForm)





        submitButton.addEventListener('click', function () {

            const bookCard = document.createElement('div');
            const bookTitle = document.createElement('h2')
            const bookAuthor = document.createElement('h3')
            const bookPages = document.createElement('p')
            const bookStatus = document.createElement('p')


            const formDataAcquired = Array
                .from(document.querySelectorAll('form input'))
                .reduce((acc, input) =>
                    ({ ...acc, [input.id]: input.value }), {});




            bookTitle.textContent = formDataAcquired.title;
            bookAuthor.textContent = formDataAcquired.author;
            bookPages.textContent = formDataAcquired.pages;



            if (formBookStatusInput.checked) {
                bookStatus.textContent = "Read";
            } else {
                bookStatus.textContent = "Not Read";
            }

            console.log(formDataAcquired.status);

            bookCard.appendChild(bookTitle);
            bookCard.appendChild(bookAuthor);
            bookCard.appendChild(bookPages);
            bookCard.appendChild(bookStatus);

            document.body.appendChild(bookCard);



            // this.form.style.display = 'none'

        })


    }



    // else if () {
    //     alert('Please submit a book first')
    // }


})


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