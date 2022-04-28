import factoryState from "../stateFactory.js";

function swapLikeReducer(state) {
  return !state;
}

const likeState = factoryState();
likeState.createSlice(false, [{ type: "swapLike", fn: swapLikeReducer }]);

const swapLike = () =>
  likeState.dispatch({
    type: "swapLike",
  });

export const likeStateListener = (callback) =>
  likeState.stateListener(callback);

export const likeDispatch = { swapLike };

export const getLikeState = () => likeState.getState();
