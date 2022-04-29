import {
  likeDispatch,
  likeStateListener,
} from "../../states/likeState/likeState.js";

export default function like() {
  const likeBtn = document.querySelector("#likeBtn");

  function changeBtnColor(state) {
    if (state.myState) {
      likeBtn.setAttribute("src", "./assets/svgs/heartFilled.svg");
      likeBtn.setAttribute("alt", "Like button filled");
    } else {
      likeBtn.setAttribute("src", "./assets/svgs/heartNoFill.svg");
      likeBtn.setAttribute("alt", "Like button without fill");
    }
  }

  likeStateListener(changeBtnColor);

  function callbackLike() {
    likeDispatch.swapLike();
  }

  likeBtn.addEventListener("click", callbackLike);
}
