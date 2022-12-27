const typeDefs = `#graphql

type Book {
        id: ID 
        title: String
        author: Author
    }

    type Author {
        name: String!
        books: [Book]
    }

    type Query {
        books: [Book]
        booksByAuthor(author: String): [Book]
    }

    type Mutation {
        addBook(title: String, author: String): Book
        editBook(id: ID, title: String, author: String): [Book]
        deleteBook(id: ID): Book
    }
    `;

export default typeDefs;
