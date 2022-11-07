import bodyParser from "body-parser";
import express from "express";
import { TODOS } from "./db.js";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/todos", (req, res) => {
  res.send(TODOS);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
import { generateDbId, isDuplicate } from "./helpers.js";

app.post("/todos", (req, res) => {
  const todo = req.body;
  try {
    if (!isDuplicate(todo)) {
      todo.id = generateDbId();
      TODOS.push(todo);
      res.send({
        message: "Todo Created Successfully!",
        todos: TODOS,
      });
    } else {
      throw Error("Todo already exists.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.patch("/todos/:id", (req, res) => {
  let todoToUpdate = TODOS.find((t) => t.id === +req.params.id);
  try {
    if (todoToUpdate) {
      const todoObj = req.body;
      todoToUpdate.task = todoObj.task;
      res.send(TODOS);
    } else {
      throw Error("Todo does not exist.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});
app.delete("/todos/:id", (req, res) => {
  const todoIndex = TODOS.findIndex((t) => t.id === +req.params.id);
  try {
    if (todoIndex >= 0) {
      TODOS.splice(todoIndex, 1);
      res.send(TODOS);
    } else {
      throw Error("Todo does not exist.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});
