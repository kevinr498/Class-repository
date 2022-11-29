const Comment = require("../models/comments");
const CommentsRepo = require("../repos/comments.repo");

class CommentsService {
  constructor() {
    this.commentsRepo = new CommentsRepo();
  }

  async getComments() {
    const results = await this.commentsRepo.getComments();
    return results.rows;
  }

  async createComment(reqBody) {
    const comment = new Comment(reqBody.commentText, reqBody.userId);
    return await this.commentsRepo.createComment(comment);
  }

  async getComment(commentId) {
    const result = await this.commentsRepo.getComment(commentId);
    return result.rows[0];
  }
}

module.exports = CommentsService;
