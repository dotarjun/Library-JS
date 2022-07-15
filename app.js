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
        inputLabelCreator("checkbox", "status", false, "Read ")


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