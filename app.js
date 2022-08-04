const body = document.querySelector(`body`);
const form = document.querySelector(`.card`);
const inputsCollection = document.querySelector(`.card__three`).children;
let feedback = undefined;
let inputsLength = undefined;

registerFeedback(inputsCollection);

form.addEventListener(`submit`, (evt) => {
  cardHandler(evt);
});

/* Handle most of the logic relative to the 'thank you' card */
function cardHandler(event) {
  event.preventDefault();
  removeFormEntries();
  changeFormLayout();
  const divImg = createNewImage();
  const feedback = createFeedbackMessage();
  const thankYou = createThankYouMessage();
  form.append(divImg, feedback, thankYou);
}

/* Get all the form's contents and remove it */
function removeFormEntries() {
  const entries = Array.from(form.children);
  entries.forEach((elem) => {
    elem.remove();
  });
}

/* Slightly change the card's layout before updating the 'thank you' content */
function changeFormLayout() {
  form.classList.remove(`padding-all`);
  form.classList.add(`padding-all-submit`, `padding-media`);
}

/* Listen to every input's click event and save the value of the last clicked input */
function registerFeedback(collection) {
  const inputs = Array.from(collection);
  inputsLength = inputs.length;
  inputs.forEach((elem) => {
    elem.addEventListener(`click`, (evt) => {
      feedback = evt.target.value;
      console.log(feedback);
    });
  });
}

/* Check if User left a feedback then modify the 'thank you' message accordingly */
function checkFeedbackInput() {
  if (!feedback) {
    return `You selected nothing!`;
  } else {
    return `You selected ${feedback} out of ${inputsLength}`;
  }
}

/* Create the illustration's content and CSS style of the 'thank you' card */
function createNewImage() {
  const div = document.createElement(`div`);
  const image = document.createElement(`img`);
  image.src = `./images/illustration-thank-you.svg`;
  div.classList.add(`flex-center`);
  div.append(image);
  return div;
}

/* Create the grading's content and CSS style of the 'thank you' card */
function createFeedbackMessage() {
  const div = document.createElement(`div`);
  const paragraph = document.createElement(`p`);
  const checkedFeedback = checkFeedbackInput();
  paragraph.textContent = checkedFeedback;
  paragraph.classList.add(`clr-pri`);
  div.classList.add(`bg-pri-400`, `round-corner`, `card__feedback`);
  div.append(paragraph);
  return div;
}

/* Create the text's content and CSS style of the 'thank you' card */
function createThankYouMessage() {
  const div = document.createElement(`div`);
  const h2 = document.createElement(`h2`);
  const paragraph = document.createElement(`p`);
  h2.textContent = `Thank you!`;
  paragraph.textContent = `We appreciate you taking the time to give a rating. If
  you ever need more support, don’t hesitate to get in touch!`;
  h2.classList.add(`fs-24`, `txt-center`);
  paragraph.classList.add(
    `fs-14`,
    `lh-22`,
    `margin-top`,
    `txt-center`,
    `fs-media`
  );
  div.append(h2, paragraph);
  return div;
}
