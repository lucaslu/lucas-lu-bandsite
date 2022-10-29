const commentsURL =
  "https://project-1-api.herokuapp.com/comments?api_key=d20c0b44-c0a5-48c0-97c5-06ce738e8211";

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
    name: inputNameValue,
    comment: inputCommentValue,
  };

  axios
    .post(commentsURL, commentObj)
    .then((response) => {
      render();

      // clear everything from the form
      event.target.reset();
    })
    .catch((error) => console.log(error));
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

  addElement(
    "p",
    "comment__date",
    new Date(commentObj.timestamp).toLocaleDateString("en-US", {
      timezone: "America/New_York",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    newGroupContainer
  );

  addElement("p", "comment__text", commentObj.comment, newContainerRight);
  commentsListContainer.appendChild(commentItem);
  addElement("hr", "comment__divider", null, commentsListContainer);
};

const render = () => {
  const commentsListContainer = document.querySelector(".comment__list");
  commentsListContainer.innerHTML = "";

  axios
    .get(commentsURL)
    .then((response) => {
      // Sort array
      response.data.sort(
        (dateOne, dateTwo) => dateTwo.timestamp - dateOne.timestamp
      );

      response.data.forEach((comment) => {
        displayComment(comment, commentsListContainer);
      });
    })
    .catch((error) => console.log(error));
};

render();

// grab the form
const commentAddForm = document.querySelector(".comment__add");
commentAddForm.addEventListener("submit", addComment);
