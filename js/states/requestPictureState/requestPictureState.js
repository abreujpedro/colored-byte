import factoryState from '../stateFactory.js';

function pending(state) {
  return 'pending';
}

function refused(state) {
  return 'rejected';
}

function fullfiled(state) {
  return 'fullfiled';
}

const requestPictureState = factoryState();
requestPictureState.createSlice(null, [
  { type: 'pendingReducer', fn: pending },
  { type: 'refusedReducer', fn: refused },
  { type: 'fullfiledReducer', fn: fullfiled },
]);

const pendingReducer = () =>
  requestPictureState.dispatch({
    type: 'pendingReducer',
  });

const refusedReducer = () =>
  requestPictureState.dispatch({
    type: 'refusedReducer',
  });

const fullfiledReducer = () =>
  requestPictureState.dispatch({
    type: 'fullfiledReducer',
  });

export const requestPictureListener = (callback) =>
  requestPictureState.stateListener(callback);

export const requestPictureDispatch = {
  pendingReducer,
  refusedReducer,
  fullfiledReducer,
};

export const getRequestPictureState = () => requestPictureState.getState();
