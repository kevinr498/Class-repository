const Input = require("../models/user");
const UsersRepo = require("../repos/usersRepo");

class UsersService {
  constructor() {
    this.usersRepo = new UsersRepo();
  }

  async getInput() {
    const data = await this.usersRepo.getInput();
    return data.rows;
  }

  async createInput({ id, type, color, quantity }) {
    const newInput = new Input(id, type, color, quantity);
    return await this.usersRepo.createInput(newInput);
  }
  async inputDelete({ id }) {
    const input = new input(id);
    return await this.usersRepo.inputDelete(input);
  }
  async editInput({ id, type, color, quantity }) {
    const inputUpdate = new Input(id, type, color, quantity);
    return await this.usersRepo.editInput(inputUpdate);
  }
}

module.exports = UsersService;
