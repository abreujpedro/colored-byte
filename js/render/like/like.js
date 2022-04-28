//TODO : STRICT MOD
import {
  likeDispatch,
  likeStateListener,
} from "../../states/likeState/likeState.js";

export default function like() {
  const likeBtn = document.querySelector("#likeBtn");

  function changeBtnColor(state) {
    if (state.myState) {
      likeBtn.style.background = "red";
    } else {
      likeBtn.style.background = "black";
    }
  }

  likeStateListener(changeBtnColor);

  function callbackLike() {
    likeDispatch.swapLike();
  }

  likeBtn.addEventListener("click", callbackLike);
}
