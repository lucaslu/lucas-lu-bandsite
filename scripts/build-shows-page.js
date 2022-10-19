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

// const newSection = document.createElement("section");
// newSection.classList.add("show");
// mainContent.appendChild(newSection);
const newSection = addElement(mainContent, "section", "show", null);

// const newHeading = document.createElement("h2");
// newHeading.classList.add("show__title");
// newHeading.innerText = "Shows";
// newSection.appendChild(newHeading);
addElement(newSection, "h2", "show__title", "Shows");

// Headers for tablet size
const newHeader = addElement(newSection, "div", "show__headers", null);
addElement(newHeader, "h3", "show__headers-item", "DATE");
addElement(newHeader, "h3", "show__headers-item", "VENUE");
addElement(newHeader, "h3", "show__headers-item", "LOCATION");
addElement(newHeader, "h3", "show__headers-item", null);

const createConcert = (date, venue, location) => {
  // const newArticle = document.createElement("article");
  // newArticle.classList.add("ticket");
  // newSection.appendChild(newArticle);
  const newArticle = addElement(newSection, "article", "ticket", null);

  // const newDate = document.createElement("p");
  // newDate.classList.add("ticket__title");
  // newDate.innerText = "DATE";
  // newArticle.appendChild(newDate);
  const newDate = addElement(newArticle, "p", "ticket__title", "DATE");
  newDate.classList.add("ticket__title--hidden");

  // const newDateText = document.createElement("p");
  // newDateText.classList.add("ticket__text");
  // newDateText.classList.add("ticket__text--strong");
  // newDateText.innerText = date;
  // newArticle.appendChild(newDateText);
  const newDateText = addElement(newArticle, "p", null, date);
  newDateText.classList.add("ticket__text", "ticket__text--strong");

  // const newVenue = document.createElement("p");
  // newVenue.classList.add("ticket__title");
  // newVenue.innerText = "VENUE";
  // newArticle.appendChild(newVenue);
  const newVenue = addElement(newArticle, "p", "ticket__title", "VENUE");
  newVenue.classList.add("ticket__title--hidden");

  // const newVenueText = document.createElement("p");
  // newVenueText.classList.add("ticket__text");
  // newVenueText.innerText = venue;
  // newArticle.appendChild(newVenueText);
  addElement(newArticle, "p", "ticket__text", venue);

  // const newLocation = document.createElement("p");
  // newLocation.classList.add("ticket__title");
  // newLocation.innerText = "LOCATION";
  // newArticle.appendChild(newLocation);
  const newLocation = addElement(newArticle, "p", "ticket__title", "LOCATION");

  // const newLocationText = document.createElement("p");
  // newLocationText.classList.add("ticket__text");
  // newLocationText.innerText = location;
  // newArticle.appendChild(newLocationText);
  addElement(newArticle, "p", "ticket__text", location);

  // const newButton = document.createElement("a");
  // newButton.classList.add("ticket__button");
  // newButton.innerText = "BUY TICKETS";
  // newArticle.appendChild(newButton);
  const newButton = addElement(
    newArticle,
    "a",
    "ticket__button",
    "BUY TICKETS"
  );

  // const newDivider = document.createElement("hr");
  // newDivider.classList.add("ticket__divider");
  // newSection.appendChild(newDivider);
  addElement(newSection, "hr", "ticket__divider", null);
};

concerts.forEach(({ date, venue, location }) =>
  createConcert(date, venue, location)
);
