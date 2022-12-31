export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: {
          args: true,
          message: "username must be unique!",
        },
      },
      password: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          message: "password must be unique!",
        },
      },
      bookID: {
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return User;
};
