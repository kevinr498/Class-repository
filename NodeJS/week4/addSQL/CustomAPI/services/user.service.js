import User from "../models/users.js";
import userRepo from "../repos/user.repo";

class userServices {
  constructor() {
    this.userRepo = new userRepo();
  }

  async creatUser(username) {
    return await this.userRepo.createUser({ username });
  }
  async getUsers() {
    const data = await this.userRepo.getUsers();
    return data.rows;
  }

  async getUser(id) {
    const userRow = await this.userRepo.getUser(id);
    return userRow;
  }

  async deleteUser(id) {
    const userRow = await this.userRepo.deleteUser(id);
    return userRow;
  }
}

export default userServices;
