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

  async createUser({ id, username, password, haircolor }) {
    const newUser = new User(id, username, password, haircolor);
    return await this.usersRepo.createUser(newUser);
  }
  async deleteUser({ id }) {
    const user = new User(id);
    return await this.usersRepo.deleteUser(user);
  }
  async updateUser({ id, username, password, haircolor }) {
    const userUpdate = new User(id, username, password, haircolor);
    return await this.usersRepo.editUser(userUpdate);
  }
}

module.exports = UsersService;
