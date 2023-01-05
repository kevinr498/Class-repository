// import bookJson from "../resolvers/books.json" assert { type: "json" };
// let books = bookJson;
const resolvers = {
  Query: {
    books: async (parent, args, { db }) => {
      try {
        const results = await db.Book.findAll({});
        return results;
      } catch (err) {
        console.log(err);
        throw Error(err);
      }
    },
    users: async (parent, args, { db }) => {
      try {
        const results = await db.User.findAll({});
        return results;
      } catch (err) {
        console.log(err);
        throw Error(err);
      }
    },
    libraryInventory: async (parent, args, { db }) => {
      try {
        const results = await db.libraryInventory.findAll({});
        return results;
      } catch (err) {
        console.log(err);
        throw Error(err);
      }
    },
    library: async (parent, args, { db }) => {
      try {
        const results = await db.library.findAll({});
        return results;
      } catch (err) {
        console.log(err);
        throw Error(err);
      }
    },
    checkedOut: async (parent, args, { db }) => {
      try {
        const results = await db.checkedOut.findAll({});
        return results;
      } catch (err) {
        console.log(err);
        throw Error(err);
      }
    },
  },

  Mutation: {
    addBook: async (parent, { title, author, checkedOutBy }, { db }) => {
      let book = { title };
      try {
        const results = await db.Book.findOrCreate({
          where: {
            title,
            author,
            checkedOutBy,
          },
          defaults: { title },
        });
        console.log("author results");
        console.log(results);
        if (results.length) {
          book = { ...book };

          const bookResults = await db.Book.findOrCreate({
            where: {
              title,
              author,
              checkedOutBy,
            },
            defaults: { ...book },
          });
          if (bookResults.length) {
            return bookResults[0].dataValues;
          }
          throw Error("failed to add/create book/author");
        }
        return results;
      } catch (err) {
        console.log(err);
        throw Error(err);
      }
    },
    addUser: async (parent, { username, password, bookID }, { db }) => {
      let newUser = {};
      let User = { username };
      try {
        const results = await db.User.findOrCreate({
          where: {
            username,
            password,
            bookID,
          },
          defaults: { username },
        });
        console.log("username results");
        console.log(results);
        if (results.length) {
          newUser = { ...results[0].dataValues };
          User = { ...User };

          const userResults = await db.User.findOrCreate({
            where: {
              username,
              password,
              bookID,
            },
            defaults: { ...User },
          });
          if (userResults.length) {
            return userResults[0].dataValues;
          }
          throw Error("failed to add/create book/author");
        }
        return results;
      } catch (err) {
        console.log(err);
        throw Error(err);
      }
    },

    editBook: (parent, { bookId, title, author }) => {
      books = books.map((book) => {
        if (book.bookId === bookId) {
          return {
            ...book,
            title,
            author,
            bookId,
            checkedOutBy,
          };
        }
        return db.Book;
      });
      return db.Book;
    },
    deleteBook: async (parent, { bookId }, { db }) => {
      const deleteBook = await db.Book.destroy({
        where: {
          bookId,
        },
      });
      return (
        await db.Book.findAll({
          include: { model: db.User, required: true },
        }),
        "book has been deleted"
      );
    },
  },
};
export default resolvers;
