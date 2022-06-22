const mealBox = document.querySelector(".random-meal"),
  startButton = mealBox.querySelector("button"),
  menuLabel = mealBox.querySelector(".menu-label"),
  buttonBox = mealBox.querySelector(".gacha-box"),
  krButton = buttonBox.querySelector(".kr"),
  cnButton = buttonBox.querySelector(".cn"),
  usButton = buttonBox.querySelector(".us"),
  jpButton = buttonBox.querySelector(".jp"),
  rdButton = buttonBox.querySelector(".rd");

const mealOptions = {
  kr: ["김치찌개", "삼계탕"],
  cn: ["짜장면", "짬뽕"],
  us: ["알리오올리오", "피자", "치킨"],
  jp: ["텐동", "연어초밥", "타코야끼"],
};

// 전체 메뉴 랜덤 선택을 위한 배열 생성
const totalMeals = Object.values(mealOptions).flat();

const startGacha = (event) => {
  // console.log(event.target.parentNode);
  buttonBox.hidden = false;
  startButton.hidden = true;
};

const getRandomMenu = (type) => {
  return type[Math.floor(Math.random() * type.length)];
};

const paintMenu = (menu) => {
  menuLabel.innerText = menu;
};

const pickOption = (event) => {
  const selected = event.target.innerText;
  paintMenu("");
  switch (selected) {
    case "한":
      paintMenu(getRandomMenu(mealOptions.kr));
      break;
    case "중":
      paintMenu(getRandomMenu(mealOptions.cn));
      break;
    case "양":
      paintMenu(getRandomMenu(mealOptions.us));
      break;
    case "일":
      paintMenu(getRandomMenu(mealOptions.jp));
      break;
    case "아무거나":
      paintMenu(getRandomMenu(totalMeals));
      break;
  }
};

startButton.addEventListener("click", startGacha);
krButton.addEventListener("click", pickOption);
cnButton.addEventListener("click", pickOption);
usButton.addEventListener("click", pickOption);
jpButton.addEventListener("click", pickOption);
rdButton.addEventListener("click", pickOption);
