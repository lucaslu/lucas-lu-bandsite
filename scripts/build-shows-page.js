const concerts = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

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
    newArticle.classList.toggle("ticket--selected");
  });

  const newDate = addElement(newArticle, "p", "ticket__title", "DATE");
  newDate.classList.add("ticket__title--hidden");

  const newDateText = addElement(newArticle, "p", null, date);
  newDateText.classList.add("ticket__text", "ticket__text-strong");

  const newVenue = addElement(newArticle, "p", "ticket__title", "VENUE");
  newVenue.classList.add("ticket__title--hidden");

  addElement(newArticle, "p", "ticket__text", venue);

  const newLocation = addElement(newArticle, "p", "ticket__title", "LOCATION");

  addElement(newArticle, "p", "ticket__text", location);

  const newButton = addElement(
    newArticle,
    "a",
    "ticket__button",
    "BUY TICKETS"
  );

  addElement(newShowContainer, "hr", "ticket__divider", null);
};

concerts.forEach(({ date, venue, location }) =>
  createConcert(date, venue, location)
);
