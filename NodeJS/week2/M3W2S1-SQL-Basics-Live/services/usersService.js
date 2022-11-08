const User = require("../models/user");
const UsersRepo = require("../repos/usersRepo");

class UsersService {
  constructor() {
    this.usersRepo = new UsersRepo();
  }

  async getUsers() {
    const data = await this.usersRepo.getUsers();
    return data.rows;
  }

  async createUser({ username, password, haircolor }) {
    const newUser = new User(username, password, haircolor);
    return await this.usersRepo.createUser(newUser);
  }
}

module.exports = UsersService;
