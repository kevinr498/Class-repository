const express = require("express");
const UsersController = require("../controllers/usersController");

const userRouter = express.Router();

const usersController = new UsersController();

userRouter.get("/users", (req, res) => usersController.getUsers(req, res));
userRouter.get("/userComments", (req, res) =>
  usersController.getComments(req, res)
);
userRouter.post("/user", (req, res) => usersController.createUser(req, res));
userRouter.post("/userComment", (req, res) =>
  usersController.addComment(req, res)
);
userRouter.put("/userUpdate", (req, res) =>
  usersController.updateUser(req, res)
);
userRouter.delete("/userDelete", (req, res) =>
  usersController.deleteUser(req, res)
);
userRouter.delete("/commentDelete", (req, res) =>
  usersController.deleteComment(req, res)
);
// put
// delete
module.exports = userRouter;
