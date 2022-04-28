export default class ContextCommentsStrategy {
  constructor(database) {
    this._database = database;
  }

  getAllComments() {
    return this._database.getAllComments();
  }
}
