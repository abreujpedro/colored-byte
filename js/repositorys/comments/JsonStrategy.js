export default class JsonStrategy {
  async getAllComments() {
    const response = await fetch('../../../assets/comments.json');
    const comments = await response.json();
    return comments;
  }
}
