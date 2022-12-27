let books = [
  {
    id: "1",
    title: "The Awakening",
    author: {
      name: "Kate Chopin",
    },
  },
  {
    id: "2",
    title: "City of Glass",
    author: {
      name: "Paul Auster",
    },
  },
];

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
    addBook: (parent, { title, author }) => {
      const book = {
        id: `${books.length + 1}`,
        title,
        author: { name: author },
      };

      books.push(book);
      return book;
    },
    editBook: (parent, {}) => {
      books = books.map((book) => {
        if (book.id === id) {
          return { ...book, title, author: { name: author } };
        }
        return books;
      });
    },
    deleteBook: (parent, { id }) => {
      const book = {
        id,
      };
      books.pop(book);

      return books, "book has been deleted";
    },
  },
  // Delete: {
  //   deleteBook: (parent, { id }) => {
  //     books = books.map((book) => {
  //       if (book.id === id) {
  //         return { ...book };
  //       }
  //       return book;
  //     });
  //   },
  // },
};

export default resolvers;
