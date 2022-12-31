import userServices from "../services/user.service.js";
import path from "path";

class userController {
  constructor() {
    this.userServices = new userServices();
  }
  async getUsers(req, res) {
    try {
      const users = await this.userServices.getUsers();
      res.send(users);
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR! unable to get users");
    }
  }
  async createUser(req, res) {
    try {
      const content = req.body;
      await this.userServices.createUser(content);
      res.status(200).send("User Created");
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR! Unable to create User");
    }
  }

  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await this.userServices.getUser(id);
      res.send(user);
      res.status(200).send("user found");
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR! unable to get user");
    }
  }
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await this.userServices.deleteUser(id);
      res.send(user);
      res.status(200).send("User deleted");
    } catch {
      console.log(e);
      res.status(500).send("ERROR! unable to delete user");
    }
  }
}

export default userController;
