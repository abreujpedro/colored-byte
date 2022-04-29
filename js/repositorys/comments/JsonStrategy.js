export default class JsonStrategy {
  async getAllComments() {
    const response = await fetch('../../../assets/bdJson.json');
    const comments = await response.json();
    return comments;
  }
}
