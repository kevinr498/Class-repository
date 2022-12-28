const typeDefs = `#graphql

type Book {
        id: ID 
        title: String
        author: Author
        genre: String
        copiesInStock: Int
        unitePrice: Float
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
        addBook(title: String, author: String, genre: String, copiesInStock: Int, unitePrice: Float): Book
        editBook(id: ID, title: String, author: String, genre: String, copiesInStock: Int, unitePrice: Float): [Book]
        deleteBook(id: ID): Book
    }
    `;

export default typeDefs;
