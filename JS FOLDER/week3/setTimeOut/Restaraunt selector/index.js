class foodListMenu {
  constructor(restaraunt, vars, randomNumber) {
    this.restaraunt = restaraunt;
    this.vars = vars;
    this.randomNumber = randomNumber;
  }
}

let menuList = {
  restaraunt: [
    { name: "O'Charley's", meal: "spinach artichoke" },
    { name: "Fizolli's", meal: "alfredo noodles" },
    { name: "Dominos", meal: "Pizza" },
    { name: "Kabuki", meal: "Sushi" },
    { name: "Taco Bell", meal: "Crunchwrap Supreme" },
  ],
};
const { restaraunt, name, meal } = menuList;
function createUL() {
  const container = document.getElementById("container");
  const ul = document.createElement("ul");
  ul.setAttribute("id", "foodListElement");
  container.appendChild(ul);
  addListOfFoods();
}

function addListOfFoods() {
  restaraunt.forEach((restaraunt) => {
    console.log(restaraunt.meal);
    const ul = document.getElementById("foodListElement");
    const listElement = document.createElement("li");
    listElement.setAttribute("id", restaraunt.name);
    listElement.innerText = restaraunt.meal;
    ul.appendChild(listElement);
  });
}
// const menuList = ["spinach artichoke", "fettucine alfredo", "taco"];

document.getElementById("buttonforFood").addEventListener("click", pickAMeal);

const onInit = new Promise((resolve, reject) => {
  resolve(createUL());
});

onInit.then((res) => {
  console.log(res);
});

function pickAMeal() {
  value = getRandomInt(5 - 1);
  console.log(value);
  return pickRestaraunt(value);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function pickRestaraunt(value) {
  console.log(restaraunt[value].name);
  const results = document.getElementById("results");
  const p = document.createElement("p");
  results.innerText = "Results:" + restaraunt[value].name;
  results.appendChild(p);
  chosenOne();
  return false;
}

function chosenOne() {
  const chosenOne = document.getElementById(restaraunt[value].name);
  chosenOne.style.background = "green";
}
