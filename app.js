const form = document.querySelector(`.card`);
const inputsCollection = document.querySelector(`.card__three`).children;
let feedback = undefined;

registerFeedback(inputsCollection);

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.dir(inputsCollection);
  console.dir(inputs);
});

/*Listen to every input's click event and save the value of the last clicked input */
function registerFeedback(collection) {
  const inputs = Array.from(collection);
  inputs.forEach((elem) => {
    elem.addEventListener("click", (evt) => {
      feedback = evt.target.value;
      console.log(feedback);
    });
  });
}
