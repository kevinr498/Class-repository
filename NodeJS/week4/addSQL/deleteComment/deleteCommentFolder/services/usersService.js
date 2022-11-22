const User = require("../models/user");
const Comment = require("../models/comments");
const UsersRepo = require("../repos/usersRepo");

class UsersService {
  constructor() {
    this.usersRepo = new UsersRepo();
  }

  async getUsers() {
    const data = await this.usersRepo.getUsers();
    return data.rows;
  }
  async getComments() {
    const data = await this.usersRepo.getComment();
    return data.rows;
  }

  async createUser({ id, username, password, haircolor }) {
    const newUser = new User(id, username, password, haircolor);
    return await this.usersRepo.createUser(newUser);
  }
  async addComment({ id, comment_text, user_id }) {
    const newComment = new Comment(id, comment_text, user_id);
    return await this.usersRepo.addComment(newComment);
  }
  async deleteUser({ id }) {
    const user = new User(id);
    return await this.usersRepo.deleteUser(user);
  }
  async deleteComment({ id }) {
    const comment = new Comment(id);
    return await this.usersRepo.deleteUser(comment);
  }
  async updateUser({ id, username, password, haircolor }) {
    const userUpdate = new User(id, username, password, haircolor);
    return await this.usersRepo.editUser(userUpdate);
  }
}

module.exports = UsersService;
