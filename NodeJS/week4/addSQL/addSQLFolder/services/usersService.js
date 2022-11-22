const inputs = require("../models/user");
const UsersRepo = require("../repos/usersRepo");

class UsersService {
  constructor() {
    this.usersRepo = new UsersRepo();
  }

  async getInput() {
    const data = await this.usersRepo.getInput();
    return data.rows;
  }

  async createInput({ ids, type, color, quantity }) {
    const newInput = new inputs(ids, type, color, quantity);
    return await this.usersRepo.createInput(newInput);
  }
  async inputDelete({ ids }) {
    const input = new inputs(ids);
    return await this.usersRepo.inputDelete(input);
  }
  async editInput({ ids, type, color, quantity }) {
    const inputUpdate = new inputs(ids, type, color, quantity);
    return await this.usersRepo.editInput(inputUpdate);
  }
}

module.exports = UsersService;
