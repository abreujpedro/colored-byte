import {
  themeStateListener,
  getThemeState,
} from "../../states/themeState/themeState.js";

export default function theme() {
  const root = document.querySelector(":root");
  function setLightTheme() {
    root.style.setProperty("--color-one", "#FFFFFF");
    root.style.setProperty("--color-two", "#FCFCFC");
    root.style.setProperty("--color-three", "#000000");
    root.style.setProperty("--color-four", "#F1F1F1");
    root.style.setProperty("--color-five", "#3D8AFF");
  }
  function setDarkTheme() {
    root.style.setProperty("--color-one", "#FFFFFF");
    root.style.setProperty("--color-two", "#FCFCFC");
    root.style.setProperty("--color-three", "#000000");
    root.style.setProperty("--color-four", "#F1F1F1");
    root.style.setProperty("--color-five", "#3D8AFF");
  }

  function handleTheme(state) {
    if (state.myState === "light") {
      setLightTheme();
    } else if (state.myState === "dark") {
      setDarkTheme();
    }
  }

  handleTheme({ myState: getThemeState() });

  themeStateListener(handleTheme);
}
