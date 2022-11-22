const UsersService = require("../services/usersService");

class UsersController {
  constructor() {
    this.usersService = new UsersService();
  }

  async getInput(req, res) {
    try {
      const inputs = await this.usersService.getInput();
      res.send(inputs);
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR!");
    }
  }

  async createInput(req, res) {
    try {
      const content = req.body;
      await this.usersService.createInput(content);
      res.status(200).send("Input Created");
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR! Unable to create Input");
    }
  }
  async inputDelete(req, res) {
    try {
      const content = req.body;
      await this.usersService.inputDelete(content);
      res.status(200).send("Input Deleted");
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR!");
    }
  }
  async editInput(req, res) {
    try {
      const content = req.body;
      await this.usersService.editInput(content);
      res.status(200).send("Input Updated");
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR!");
    }
  }
}

module.exports = UsersController;
