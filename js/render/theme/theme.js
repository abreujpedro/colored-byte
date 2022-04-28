import { themeStateListener } from '../../states/themeState/themeState.js';

export default function theme() {
  const root = document.querySelector(':root');
  function setLightTheme() {
    root.style.setProperty('--color-one', '#FFFFFF');
    root.style.setProperty('--color-two', '#FFFFFF');
    root.style.setProperty('--color-three', '#FFFFFF');
    root.style.setProperty('--color-four', '#FFFFFF');
    root.style.setProperty('--color-five', '#FFFFFF');
  }
  function setDarkTheme() {
    root.style.setProperty('--color-one', '#FFFFFF');
    root.style.setProperty('--color-two', '#FFFFFF');
    root.style.setProperty('--color-three', '#FFFFFF');
    root.style.setProperty('--color-four', '#FFFFFF');
    root.style.setProperty('--color-five', '#FFFFFF');
  }

  function handleTheme(state) {
    if (state.myState === 'light') {
      setLightTheme();
    } else if (state.myState === 'dark') {
      setDarkTheme();
    }
  }

  themeStateListener(handleTheme);
}
