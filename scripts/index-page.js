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

const addElement = (element, className, text) => {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  newElement.innerText = text;
  return newElement;
};

const addComment = (event) => {
  event.preventDefault();

  const commentObj = {
    id: uniqueId(),
    name: event.target.name.value,
    comment: event.target.comment.value,
    date: new Date().toLocaleDateString("en-US"),
  };

  comments.unshift(commentObj);
  render();

  // clear everything from the form
  event.target.reset();
};

const displayComment = (commentObj, commentsListContainer) => {
  const commentItem = addElement("div", "comment__item", null);
  commentItem.setAttribute("id", commentObj.id);

  const commentName = addElement("p", "comment__name", commentObj.name);
  const commentDate = addElement("p", "comment__date", commentObj.date);
  const commentText = addElement("p", "comment__text", commentObj.comment);

  commentItem.appendChild(commentName);
  commentItem.appendChild(commentDate);
  commentItem.appendChild(commentText);

  commentsListContainer.appendChild(commentItem);
};

const render = () => {
  const commentsListContainer = document.querySelector(".comments__list");
  commentsListContainer.innerHTML = "";
  for (const comment of comments) {
    displayComment(comment, commentsListContainer);
  }
};

render();

// grab the form
const commentAddForm = document.querySelector(".comment__add");
commentAddForm.addEventListener("submit", addComment);
