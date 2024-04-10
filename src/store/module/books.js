export default {
    state: {
        books: [
            { id: 2, title: 'The Shadow of the Wind', author: 'Carlos Ruiz Zafón', price: 10.50, cover: 'assets/book_img_.png' },
            { id: 3, title: '1984', author: 'George Orwell', price: 8.99, cover: 'assets/book_img_.png' },
            { id: 4, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 9.95, cover: 'assets/book_img_.png' },
            { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 7.75, cover: 'assets/book_img_.png' },
            { id: 6, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 11.25, cover: 'assets/book_img_.png' },
            { id: 7, title: 'Pride and Prejudice', author: 'Jane Austen', price: 6.99, cover: 'assets/book_img_.png' },
            { id: 8, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', price: 14.99, cover: 'assets/book_img_.png' },
            { id: 9, title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 13.50, cover: 'assets/book_img_.png' },
            { id: 10, title: 'The Da Vinci Code', author: 'Dan Brown', price: 9.25, cover: 'assets/book_img_.png' },
            { id: 11, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', price: 19.99, cover: 'assets/book_img_.png' }
        ]
    },
    getters: {
        books: state => state.books,
    },
};