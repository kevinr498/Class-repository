import bookJson from "../resolvers/books.json" assert { type: "json" };
let books = bookJson;

const resolvers = {
  Query: {
    books: () => books,
    booksByAuthor: (parent, { author }) => {
      return books.filter((book) => {
        return book.author.name === author;
      });
    },
  },
  Mutation: {
    addBook: (parent, { title, author, genre, copiesInStock, unitePrice }) => {
      const book = {
        id: `${books.length + 1}`,
        title,
        author: { name: author },
        genre,
        copiesInStock,
        unitePrice,
      };

      books.push(book);
      return book;
    },
    editBook: (
      parent,
      { id, title, author, genre, copiesInStock, unitePrice }
    ) => {
      books = books.map((book) => {
        if (book.id === id) {
          return {
            ...book,
            title,
            author: { name: author },
            genre,
            copiesInStock,
            unitePrice,
          };
        }
        return book;
      });
      return books;
    },
    deleteBook: (parent, { id }) => {
      const book = {
        id,
      };
      books.pop(book);

      return books, "book has been deleted";
    },
  },
};

export default resolvers;
