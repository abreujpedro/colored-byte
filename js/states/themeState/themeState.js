import factoryState from '../stateFactory.js';

function setLightThemeReducer(state) {
  return 'light';
}

function setDarkThemeReducer(state) {
  return 'dark';
}

const themeState = factoryState();
themeState.createSlice(false, [
  { type: 'setLightTheme', fn: setLightThemeReducer },
  { type: 'setDarkTheme', fn: setDarkThemeReducer },
]);

const setLightTheme = () =>
  themeState.dispatch({
    type: 'setLightTheme',
  });

const setDarkTheme = () =>
  themeState.dispatch({
    type: 'setLightTheme',
  });

export const themeStateListener = (callback) =>
  themeState.stateListener(callback);

export const themeDispatch = { setLightTheme, setDarkTheme };

export const getThemeState = () => themeState.getState();
