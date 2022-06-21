const mealBox = document.querySelector(".random-meal");
const startButton = mealBox.querySelector("button");
const buttonBox = mealBox.querySelector(".gacha-box");
const krButton = buttonBox.querySelector(".kr");
const cnButton = buttonBox.querySelector(".cn");
const usButton = buttonBox.querySelector(".us");
const jpButton = buttonBox.querySelector(".jp");
const rdButton = buttonBox.querySelector(".rd");

const mealOptions = {
  kr: ["김치찌개", "삼계탕"],
  cn: ["짜장면", "짬뽕"],
  us: ["알리오올리오", "피자", "치킨"],
  jp: ["텐동", "연어초밥", "타코야끼"],
};

const totalMeals = Object.values(mealOptions).flat();

const getRandomMenu = (type) => {
  return type[Math.floor(Math.random() * type.length)];
};

const startGacha = (event) => {
  // console.log(event.target.parentNode);
  buttonBox.hidden = false;
  startButton.hidden = true;
};

const pickOption = (event) => {
  const selected = event.target.innerText;
  switch (selected) {
    case "한":
      console.log(getRandomMenu(mealOptions.kr));
      break;
    case "중":
      console.log(getRandomMenu(mealOptions.cn));
      break;
    case "양":
      console.log(getRandomMenu(mealOptions.us));
      break;
    case "일":
      console.log(getRandomMenu(mealOptions.jp));
      break;
    case "아무거나":
      console.log(getRandomMenu(totalMeals));
      break;
  }
};

startButton.addEventListener("click", startGacha);
krButton.addEventListener("click", pickOption);
cnButton.addEventListener("click", pickOption);
usButton.addEventListener("click", pickOption);
jpButton.addEventListener("click", pickOption);
rdButton.addEventListener("click", pickOption);
