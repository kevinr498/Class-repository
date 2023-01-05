export default (sequelize, DataTypes) => {
  const LibraryInventory = sequelize.define(
    "libraryInventory",
    {
      numberOfBooks: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      numberOfBooksCheckedOut: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      numberOfUsersWithBooks: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return LibraryInventory;
};
