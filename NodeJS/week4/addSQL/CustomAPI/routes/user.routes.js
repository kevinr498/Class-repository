import express from "express";
import userController from "../controllers/user.controllers";

const userController = new userController();
const userRouter = express.Router();

userRouter.post("/createUser", (req, res) =>
  userController.createUser(req, res)
);

userRouter.get("/getUsers", (req, res) => userController.getUsers(req, res));
userRouter.delete("/deleteUser/:id", (req, res) =>
  userController.deleteUser(req, res)
);
userRouter.get("/getUser/:id", (req, res) => userController.getUser(req, res));

export default userRouter;
