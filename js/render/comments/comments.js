import {
  commentStateListener,
  commentsDispatch,
} from '../../states/commentsState/commentsState.js';

export default function comments() {
  let simulateId = 22;

  function selectHTMLCommentsId() {
    return [...document.querySelectorAll('.comment')].map((item) =>
      Number(item.getAttribute('id')),
    );
  }

  function createNewCommentElement(id, user, comment) {
    const paragraph = document.createElement('p');
    paragraph.setAttribute('id', id);
    paragraph.setAttribute('class', 'comment');
    paragraph.innerHTML = `${user} --- ${comment}`;
    return paragraph;
  }

  function addCommentSectionChild(element) {
    document.querySelector('.commentsSection').appendChild(element);
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
          stateComments[comment].comment,
        );
        addCommentSectionChild(newComment);
      }
    }
  }

  commentStateListener(renderNewComments); //Observer to render new comments on state change

  const buttonPostComment = document.querySelector('#postCommentBtn');
  buttonPostComment.addEventListener('click', callbackAddCommentState);

  const commentInput = document.querySelector('#commentInput');

  function selectComment() {
    return commentInput.value;
  }

  function callbackAddCommentState() {
    const user = 'comment';
    const comment = selectComment();
    if (comment) {
      simulateId++;
      commentsDispatch.addComment({ simulateId, user, comment });
    }
  }
}
