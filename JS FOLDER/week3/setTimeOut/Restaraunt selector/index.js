class menuList {
  constructor(restaraunt) {
    this.restaraunt = restaraunt;
    this.vars = vars;
  }
}

this.restaraunt = [
  { name: "O'Charley's", meal: "spinach artichoke" },
  { name: "Fizolli's", meal: "alfredo noodles" },
  { name: "Dominos", meal: "Pizza" },
  { name: "Kabuki", meal: "Sushi" },
  { name: "Taco Bell", meal: "Crunchwrap Supreme" },
];

function createUL() {
  const box = document.getElementById("box");
  const ul = document.createElement("ul");
  ul.setAttribute("id", "foodListElement");
  box.appendChild(ul);
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
document.getElementById("buttonforFood").addEventListener("click", pickAMeal);

const onInit = new Promise((resolve, reject) => {
  resolve(createUL());
});

onInit.then((res) => {
  console.log(res);
});

function pickAMeal() {
  value = getRandomInt(restaraunt.length);
  console.log(value);
  return pickRestaraunt(value);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function pickRestaraunt(value) {
  resetPriorSelection();
  console.log(restaraunt[value].name);
  const results = document.getElementById("results");
  const p = document.createElement("p");
  results.innerText = "Results: " + restaraunt[value].name;
  results.appendChild(p);
  chosenOne();
  return false;
}

function chosenOne() {
  const chosenOne = document.getElementById(restaraunt[value].name);
  chosenOne.style.background = "green";
}

function resetPriorSelection() {
  restaraunt.forEach((restaraunt) => {
    const chosenOneReset = document.getElementById(restaraunt.name);
    chosenOneReset.style.background = "transparent";
  });
}

function addNewObject(name, meal) {
  name = document.getElementById("newRestaruant").value;
  meal = document.getElementById("newFood").value;
  restaraunt.push({ name, meal });
  console.log(this.restaraunt);
  updateUL();
  return false;
}
function updateUL(name, meal) {
  const ul = document.getElementById("foodListElement");
  const listElement = document.createElement("li");
  meal = document.getElementById("newFood").value;
  name = document.getElementById("newRestaruant").value;
  listElement.setAttribute("id", name);
  listElement.innerText = meal;
  ul.appendChild(listElement);
}
