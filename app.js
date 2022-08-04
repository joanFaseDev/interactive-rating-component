const body = document.querySelector(`body`);
const form = document.querySelector(`.card`);
const inputsCollection = document.querySelector(`.card__three`).children;
let feedback = undefined;
let inputsLength = undefined;

registerFeedback(inputsCollection);

form.addEventListener(`submit`, (evt) => {
  evt.preventDefault();
  removeFormEntries();
  changeFormLayout();
  const divImg = createNewImage();
  const feedback = createFeedbackMessage();
  const thankYou = createThankYouMessage();
  form.append(divImg, feedback, thankYou);
});

function removeFormEntries() {
  const entries = Array.from(form.children);
  entries.forEach((elem) => {
    elem.remove();
  });
}

function changeFormLayout() {
  form.classList.remove(`padding-all`);
  form.classList.add(`padding-all-submit`, `padding-media`);
}

/*Listen to every input's click event and save the value of the last clicked input */
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

function checkFeedbackInput() {
  if (!feedback) {
    return `You selected nothing!`;
  } else {
    return `You selected ${feedback} out of ${inputsLength}`;
  }
}

function createNewImage() {
  const div = document.createElement(`div`);
  const image = document.createElement(`img`);
  image.src = `./images/illustration-thank-you.svg`;
  div.classList.add(`flex-center`);
  div.append(image);
  return div;
}

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
