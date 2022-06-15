const mealBox = document.querySelector(".random-meal");

const startButton = mealBox.querySelector("button");
const optionBox = mealBox.querySelector("div");

const startGacha = (event) => {
  // console.log(event.target.parentNode);
  optionBox.hidden = false;
  startButton.hidden = true;
};

startButton.addEventListener("click", startGacha);
