const addElement = (parent, element, className, text) => {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  newElement.innerText = text;
  parent.appendChild(newElement);
  return newElement;
};

const mainContent = document.querySelector(".main-content");

const newSection = addElement(mainContent, "section", "show", null);

addElement(newSection, "h2", "show__title", "Shows");
const newShowContainer = addElement(newSection, "div", "show__container", null);

// Headers for tablet size
const newHeader = addElement(newShowContainer, "div", "show__headers", null);
addElement(newHeader, "h3", "show__headers-item", "DATE");
addElement(newHeader, "h3", "show__headers-item", "VENUE");
addElement(newHeader, "h3", "show__headers-item", "LOCATION");
addElement(newHeader, "h3", "show__headers-item", null);

const createConcert = (date, venue, location) => {
  const newArticle = addElement(newShowContainer, "article", "ticket", null);

  newArticle.addEventListener("click", (event) => {
    const ticketSelected = document.querySelector(".ticket--selected");
    ticketSelected && ticketSelected.classList.remove("ticket--selected");

    newArticle.classList.toggle("ticket--selected");
  });

  const newDate = addElement(newArticle, "p", "ticket__title", "DATE");
  newDate.classList.add("ticket__title--hidden");

  const newDateText = addElement(
    newArticle,
    "p",
    null,
    new Date(date).toLocaleDateString("en-US", {
      timezone: "America/New_York",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  );

  newDateText.classList.add("ticket__text", "ticket__text-strong");

  const newVenue = addElement(newArticle, "p", "ticket__title", "VENUE");
  newVenue.classList.add("ticket__title--hidden");

  addElement(newArticle, "p", "ticket__text", venue);

  addElement(newArticle, "p", "ticket__title", "LOCATION");

  addElement(newArticle, "p", "ticket__text", location);

  const newButton = addElement(
    newArticle,
    "a",
    "ticket__button",
    "BUY TICKETS"
  );

  addElement(newShowContainer, "hr", "ticket__divider", null);
};

const render = () => {
  const showsURL =
    "https://project-1-api.herokuapp.com/showdates?api_key=d20c0b44-c0a5-48c0-97c5-06ce738e8211";

  axios
    .get(showsURL)
    .then((response) => {
      response.data.forEach(({ date, place, location }) => {
        createConcert(date, place, location);
      });
    })
    .catch((error) => console.log(error));
};

render();
