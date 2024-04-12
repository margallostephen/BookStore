export default {
    state: {
        books: [
            { id: 1, title: 'The Shadow of the Wind', author: 'Carlos Ruiz Zafón', price: 100 },
            { id: 2, title: '1984', author: 'George Orwell', price: 800 },
            { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 900 },
            { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 700 },
            { id: 5, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 110 },
            { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', price: 600 },
            { id: 7, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', price: 140 },
            { id: 8, title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 130 },
            { id: 9, title: 'The Da Vinci Code', author: 'Dan Brown', price: 900 },
            { id: 10, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', price: 190 }
        ]
    },
    getters: {
        books: state => state.books,
    },
};