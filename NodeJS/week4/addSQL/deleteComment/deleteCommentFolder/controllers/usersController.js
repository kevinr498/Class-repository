const UsersService = require("../services/usersService");

class UsersController {
  constructor() {
    this.usersService = new UsersService();
  }

  async getUsers(req, res) {
    try {
      const users = await this.usersService.getUsers();
      res.send(users);
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR!");
    }
  }
  async getComments(req, res) {
    try {
      const comments = await this.usersService.getComments();
      res.send(comments);
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR!l Unable to get comments");
    }
  }

  async createUser(req, res) {
    try {
      const content = req.body;
      await this.usersService.createUser(content);
      res.status(200).send("User Created");
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR!");
    }
  }
  async addComment(req, res) {
    try {
      const content = req.body;
      await this.usersService.addComment(content);
      res.status(200).send("Comment Added");
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR! Unable to create comment");
    }
  }
  async deleteUser(req, res) {
    try {
      const content = req.body;
      await this.usersService.deleteUser(content);
      res.status(200).send("User Deleted");
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR!");
    }
  }
  async deleteComment(req, res) {
    try {
      const content = req.body;
      await this.usersService.deleteComment(content);
      res.status(200).send("Comment Deleted");
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR! Unable to delete comment");
    }
  }
  async updateUser(req, res) {
    try {
      const content = req.body;
      await this.usersService.updateUser(content);
      res.status(200).send("User Updated");
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR!");
    }
  }
}

module.exports = UsersController;
