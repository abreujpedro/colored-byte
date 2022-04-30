import myDB from "./comments.js";

export default class JsonStrategy {
  getAllComments() {
    return myDB;
  }
}
