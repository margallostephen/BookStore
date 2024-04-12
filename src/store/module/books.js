export default {
    state: {
        books: [
            { id: 1, title: 'The Shadow of the Wind', author: 'Carlos Ruiz Zafón', price: 10.50 },
            { id: 2, title: '1984', author: 'George Orwell', price: 8.99 },
            { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 9.95 },
            { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 7.75 },
            { id: 5, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 11.25 },
            { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', price: 6.99 },
            { id: 7, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', price: 14.99 },
            { id: 8, title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 13.50 },
            { id: 9, title: 'The Da Vinci Code', author: 'Dan Brown', price: 9.25 },
            { id: 10, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', price: 19.99 }
        ]
    },
    getters: {
        books: state => state.books,
    },
};