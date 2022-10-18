const concerts = [
  {
    dates: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    dates: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    dates: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    dates: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    dates: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    dates: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

let mainContent = document.querySelector(".main-content");

const newSection = document.createElement("section");
newSection.classList.add("show");
mainContent.appendChild(newSection);

const newHeading = document.createElement("h2");
newHeading.classList.add("show__title");
newHeading.innerText = "Shows";
newSection.appendChild(newHeading);

function createConcert(dates, venue, location) {
  const newArticle = document.createElement("article");
  newArticle.classList.add("ticket");
  newSection.appendChild(newArticle);

  const newDate = document.createElement("p");
  newDate.classList.add("ticket__title");
  newDate.innerText = "DATE";
  newArticle.appendChild(newDate);

  const newDateText = document.createElement("p");
  newDateText.classList.add("ticket__text");
  newDateText.classList.add("ticket__text--strong");
  newDateText.innerText = dates;
  newArticle.appendChild(newDateText);

  const newVenue = document.createElement("p");
  newVenue.classList.add("ticket__title");
  newVenue.innerText = "VENUE";
  newArticle.appendChild(newVenue);

  const newVenueText = document.createElement("p");
  newVenueText.classList.add("ticket__text");
  newVenueText.innerText = venue;
  newArticle.appendChild(newVenueText);

  const newLocation = document.createElement("p");
  newLocation.classList.add("ticket__title");
  newLocation.innerText = "LOCATION";
  newArticle.appendChild(newLocation);

  const newLocationText = document.createElement("p");
  newLocationText.classList.add("ticket__text");
  newLocationText.innerText = location;
  newArticle.appendChild(newLocationText);

  const newButton = document.createElement("a");
  newButton.classList.add("ticket__button");
  newButton.innerText = "BUY TICKETS";
  newArticle.appendChild(newButton);
}

concerts.forEach(({ dates, venue, location }) =>
  createConcert(dates, venue, location)
);
