import myDB from "./jsonDB.js";

export default class JsonStrategy {
  async getAllComments() {
    return myDB;
  }
}
