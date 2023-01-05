export default (sequelize, DataTypes) => {
  const CheckOut = sequelize.define(
    "checkOut",
    {
      numberOfBooks: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      numberOfBooksCheckedOut: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return CheckOut;
};
