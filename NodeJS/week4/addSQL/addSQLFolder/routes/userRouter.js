const express = require("express");
const UsersController = require("../controllers/usersController");

const userRouter = express.Router();

const usersController = new UsersController();

userRouter.get("/getInput", (req, res) => usersController.getInput(req, res));
userRouter.post("/createInput", (req, res) =>
  usersController.createInput(req, res)
);
userRouter.put("/editInput", (req, res) => usersController.editInput(req, res));
userRouter.delete("/inputDelete", (req, res) =>
  usersController.inputDelete(req, res)
);
// put
// delete
module.exports = userRouter;
