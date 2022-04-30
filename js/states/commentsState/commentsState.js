import factoryState from "../stateFactory.js";
import JsonStrategy from "../../repositorys/comments/jsonStrategy.js";
import ContextCommentsStrategy from "../../repositorys/comments/ContextCommentsStrategy.js";

function addCommentReducer(state, payload) {
  return [...state, payload];
}

// const jsonRepository = new JsonStrategy();
// const dataBaseComments = new ContextCommentsStrategy(jsonRepository);
// const initialState = dataBaseComments.getAllComments();

const commentsState = factoryState();
commentsState.createSlice([], [{ type: "addComment", fn: addCommentReducer }]);

const addComment = (commentObj) =>
  commentsState.dispatch({
    type: "addComment",
    payload: commentObj,
  });

export const commentStateListener = (callback) =>
  commentsState.stateListener(callback);

export const commentsDispatch = { addComment };

export const getCommentsState = () => commentsState.getState();
