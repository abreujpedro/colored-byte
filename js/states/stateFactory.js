function createStateObserver(state) {
  const observerList = [];

  function subscribe(fn) {
    observerList.push(fn);
  }
  function notifyAll() {
    for (const observerFunction of observerList) {
      if (state) {
        observerFunction(state);
      }
    }
  }

  function alertObservers() {
    notifyAll();
  }

  return { subscribe, alertObservers };
}

export default function factoryState() {
  const state = {};
  const reducerObj = {};

  const stateObserver = createStateObserver(state);
  const stateListener = stateObserver.subscribe;

  function addReducers(reducerObjRecive) {
    reducerObj[reducerObjRecive.type] = reducerObjRecive.fn;
  }

  function setInitialState(initialState) {
    state.myState = initialState;
  }

  function createSlice(initialState, reducer) {
    setInitialState(initialState);
    for (const reducerId in reducer) {
      addReducers(reducer[reducerId]);
    }
  }

  function dispatch(action) {
    const newState = action.payload
      ? reducerObj[action.type](state.myState, action.payload)
      : reducerObj[action.type](state.myState);
    state.myState = newState;
    stateObserver.alertObservers();
  }

  function getState() {
    return state.myState;
  }
  return { getState, stateListener, dispatch, createSlice };
}
