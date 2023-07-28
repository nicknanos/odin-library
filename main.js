

const libContainer = document.querySelector('.library-container');
const bookForm = document.querySelector('#book-form');
const addBtn = document.querySelector('.add');

const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const inputRead = document.querySelector('#read');

const submitBtn = document.querySelector('.submit');
const cancelBtn = document.querySelector('.cancel');

let library = [
    {
        title: 'Lord Of The Rings',
        author: "J.R.R Tolkien",
        pages: '1178',
        read: true
    }
];
refreshLibrary();

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}

function addBook(book) {
    library.push(book);
    libContainer.innerHTML=''
    refreshLibrary();
}

function refreshLibrary() {
    library.forEach((book)=>{
        let bookCont = document.createElement('div');
        bookCont.classList.add('book')
        let title = document.createElement('h2');
        title.innerText = book.title;
        bookCont.appendChild(title)
        let author = document.createElement('p');
        author.classList.add('author');
        author.innerText = `Author: ${book.author}` ;
        bookCont.appendChild(author)
        let pages = document.createElement('p');
        pages.classList.add('pages');
        pages.innerText = `Pages: ${book.pages}`;
        bookCont.appendChild(pages)
        let read = document.createElement('p');
        read.classList.add('read');
        if (book.read){
            read.dataset.read = 'yes'
            read.innerText = 'Read'
        }else {
            read.dataset.read = 'no'
            read.innerText = 'Not Read'
        }
        bookCont.appendChild(read);
        libContainer.appendChild(bookCont);
    })
    addButtonEvent();
}

function createBook (title,autor,pages,read) {
    let book = new Book(title,autor,pages,read);
    addBook(book);
}

addBtn.addEventListener('click', ()=>{
    bookForm.showModal();
})

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    createBook(inputTitle.value,inputAuthor.value,inputPages.value,inputRead.checked)
    bookForm.close();
})

cancelBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    bookForm.close();
})





//Read Button
function addButtonEvent() {
    let readBtn = document.querySelectorAll('[data-read]')
    readBtn.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            if(e.target.dataset.read=='yes') {
                e.target.dataset.read='no'
                e.target.innerText = 'Not Read'
            }else {
                e.target.dataset.read ='yes'
                e.target.innerText = 'Read'
            }
        })
    })
}


