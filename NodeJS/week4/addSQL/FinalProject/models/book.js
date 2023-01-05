export default (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "book",
    {
      bookId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: {
          args: true,
          message: "Title must be unique!",
        },
      },
      author: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          message: "Author must be unique!",
        },
      },
      checkedOutBy: {
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Book;
};
