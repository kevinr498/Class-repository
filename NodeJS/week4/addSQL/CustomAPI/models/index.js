import dotenv from "dotenv";
dotenv.config();
import { Sequelize, DataTypes } from "sequelize";

import User from "./users.js";
import Book from "./book.js";
import Library from "./library.js";
import LibraryInventory from "./libraryInventory.js";
import CheckedOut from "./checkedOut.js";
import libraryInventory from "./libraryInventory.js";
import checkedOut from "./checkedOut.js";

const db = {};
const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to DB...");
  })
  .catch((err) => {
    console.log("Unable to connect", err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User(sequelize, DataTypes);
db.Book = Book(sequelize, DataTypes);
db.CheckedOut = CheckedOut(sequelize, DataTypes);
db.libraryInventory = libraryInventory(sequelize, DataTypes);
db.Library = Library(sequelize, DataTypes);
db.User.hasMany(db.Book);
db.Book.belongsTo(db.User);

export default db;
