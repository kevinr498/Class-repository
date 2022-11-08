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
}

module.exports = UsersController;
