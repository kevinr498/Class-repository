const typeDefs = `#graphql

type Book {
        bookId: Int
        checkedOutBy: Int
        title: String
        author: String
    }
type User {
    userId: Int
    username: String
    password: String
    bookID: Int
    
}

    type Query {
        users: [User]
        books: [Book]
        booksByAuthor(author: String): [Book]
    }

    type Mutation {
        addBook(title: String, author: String, checkedOutBy: Int): Book
        editBook(id: ID, title: String, author: String, genre: String, copiesInStock: Int, unitePrice: Float): [Book]
        deleteBook(bookId: Int): Book
        addUser(username: String, password: String, bookID: Int): User
    }
    `;

export default typeDefs;
