export default (sequelize, DataTypes) => {
  const Library = sequelize.define(
    "library",
    {
      locationId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: {
          args: true,
          message: "Name must be unique!",
        },
      },
      location: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          message: "Author must be unique!",
        },
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Library;
};
