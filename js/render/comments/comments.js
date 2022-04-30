import {
  commentStateListener,
  commentsDispatch,
  getCommentsState,
} from "../../states/commentsState/commentsState.js";

export default function comments() {
  let simulateId = 22;

  const buttonPostComment = document.querySelector("#postCommentBtn");
  const commentInput = document.querySelector("#commentInput");
  const commentSection = document.querySelector(".commentsSection");

  function selectHTMLCommentsId() {
    return [...document.querySelectorAll(".comment")].map((item) =>
      Number(item.getAttribute("id"))
    );
  }

  function createNewCommentElement(id, user, comment) {
    const itemList = document.createElement("li");
    const paragraph = document.createElement("p");
    itemList.appendChild(paragraph);
    paragraph.setAttribute("id", id);
    paragraph.setAttribute("class", "comment");
    paragraph.innerHTML = `<span>${user}</span> ${comment}`;
    return itemList;
  }

  function addCommentSectionChild(element) {
    commentSection.appendChild(element);
  }

  function renderNewComments(state) {
    //Render only new comments of the state
    const stateComments = state.myState;
    const arrayHTMLIds = selectHTMLCommentsId();
    for (const comment in stateComments) {
      if (!arrayHTMLIds.includes(stateComments[comment].simulateId)) {
        const newComment = createNewCommentElement(
          stateComments[comment].simulateId,
          stateComments[comment].user,
          stateComments[comment].comment
        );
        addCommentSectionChild(newComment);
      }
    }
  }

  renderNewComments({ myState: getCommentsState() }); // first render

  commentStateListener(renderNewComments); //Observer to render new comments on state change

  function selectComment() {
    return commentInput.value;
  }

  function verifyComment(comment) {
    return !!comment;
  }

  function clearInput(input) {
    input.value = "";
  }

  function setBottomScrollSection(section) {
    section.scrollTop = section.scrollHeight;
  }

  function callbackAddCommentState() {
    const user = "comment";
    const comment = selectComment();
    if (verifyComment(comment)) {
      simulateId++;
      commentsDispatch.addComment({ simulateId, user, comment });
    }
    clearInput(commentInput);
    setBottomScrollSection(commentSection);
  }

  buttonPostComment.addEventListener("click", callbackAddCommentState);

  commentInput.addEventListener("keydown", ({ key }) => {
    if (key === "Enter") {
      callbackAddCommentState();
    }
  });
}
