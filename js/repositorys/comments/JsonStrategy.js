export default class JsonStrategy {
  async getAllComments() {
    try {
      const response = await fetch("./bdJson.json");
      const comments = await response.json();
      return comments;
    } catch (error) {
      throw new Error(error);
    }
  }
}
