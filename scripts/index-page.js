const uniqueId = () => Math.random().toString(36).substring(2, 9);

const comments = [
  {
    id: uniqueId(),
    name: "Connor Walton",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    date: "02/17/2021",
  },
  {
    id: uniqueId(),
    name: "Emilie Beach",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    date: "01/09/2021",
  },
  {
    id: uniqueId(),
    name: "Miles Acosta",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    date: "12/20/2020",
  },
];

const addElement = (element, className, text, parentElement) => {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  newElement.innerText = text;
  parentElement ? parentElement.appendChild(newElement) : null;
  return newElement;
};

const clearError = (nameAddInput, commentAddInput) => {
  nameAddInput.classList.remove("comment__input--error");
  commentAddInput.classList.remove("comment__input--error");
};

const showError = (inputField) => {
  const commentAddForm = document.querySelector(".comment__add");
  const nameAddInput = document.querySelector('input[name="name"]');
  const commentAddInput = document.querySelector(".comment__input--large");

  if (inputField === "name") {
    nameAddInput.classList.add("comment__input--error");
  } else if (inputField === "comment") {
    commentAddInput.classList.add("comment__input--error");
  }

  setTimeout(() => clearError(nameAddInput, commentAddInput), 2000);
};

const addComment = (event) => {
  event.preventDefault();
  const inputNameValue = event.target.name.value;
  const inputCommentValue = event.target.commentInput.value;

  if (!inputNameValue) {
    showError("name");
    return;
  } else if (!inputCommentValue) {
    showError("comment");
    return;
  }

  const commentObj = {
    id: uniqueId(),
    name: inputNameValue,
    comment: event.target.comment.value,
    date: new Date().toLocaleDateString("en-US"),
  };

  comments.unshift(commentObj);
  render();

  // clear everything from the form
  event.target.reset();
};

const displayComment = (commentObj, commentsListContainer) => {
  const commentItem = addElement("article", "comment__item", null, null);
  commentItem.setAttribute("id", commentObj.id);

  const newContainer = addElement(
    "div",
    "comment__container",
    null,
    commentItem
  );
  const newContainerLeft = addElement(
    "div",
    "comment__left",
    null,
    newContainer
  );
  addElement("div", "comment__avatar", null, newContainerLeft);
  const newContainerRight = addElement(
    "div",
    "comment__right",
    null,
    newContainer
  );
  const newGroupContainer = addElement(
    "div",
    "comment__group-container",
    null,
    newContainerRight
  );
  addElement("p", "comment__name", commentObj.name, newGroupContainer);
  addElement("p", "comment__date", commentObj.date, newGroupContainer);
  addElement("p", "comment__text", commentObj.comment, newContainerRight);
  commentsListContainer.appendChild(commentItem);
  addElement("hr", "comment__divider", null, commentsListContainer);
};

const render = () => {
  const commentsListContainer = document.querySelector(".comment__list");
  commentsListContainer.innerHTML = "";

  comments.forEach((comment) => displayComment(comment, commentsListContainer));
};

render();

// grab the form
const commentAddForm = document.querySelector(".comment__add");
commentAddForm.addEventListener("submit", addComment);
