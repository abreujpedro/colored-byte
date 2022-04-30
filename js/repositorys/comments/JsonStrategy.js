import myDB from "./jsonDB.js";

export default class JsonStrategy {
  getAllComments() {
    return myDB;
  }
}
