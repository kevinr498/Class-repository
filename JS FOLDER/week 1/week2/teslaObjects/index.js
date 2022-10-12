class Vehicle {
  #numberOfDoors = 4;
  #numberOfWheels = 4;
  constructor(
    numberOfDoors,
    numberOfWheels,
    color,
    trim,
    wheels,
    interior,
    enhancedAutoPilot,
    fullSelfDrivingCapability,
    vars
  ) {
    this.#numberOfDoors = numberOfDoors;
    this.#numberOfWheels = numberOfWheels;
    this.color = color;
    this.trim = trim;
    this.wheels = wheels;
    this.interior = interior;
    this.enhancedAutoPilot = enhancedAutoPilot;
    this.fullSelfDrivingCapability = fullSelfDrivingCapability;
    this.vars = vars;
  }
}
class ModelS {
  #topSpeed = [
    {
      trim: "Plaid",
      speed: "the top speed is 200mph",
    },
    { trim: "Standard", speed: "the top speed is 149mph" },
  ];
  constructor(topSpeed) {
    this.#topSpeed = topSpeed;
  }
}
vars(
  (this.color = String),
  (this.trim = String),
  (this.wheels = String),
  (this.interior = String),
  (this.enhancedAutoPilot = Boolean),
  (this.fullSelfDrivingCapability = Boolean),
  (this.topSpeed = String),
  (this.numberOfDoors = Number),
  (this.numberOfWheels = Number)
);

function details() {
  return `Your Model S has a ${this.color} exterior color with the ${
    this.wheels
  } wheel package and ${
    this.interior
  } interior. This vehicle has Enhanced Auto Pilot ${
    this.enhancedAutoPilot ? "enabled" : "disabled"
  } and Full Self Driving Capability ${
    this.fullSelfDrivingCapability ? "enabled" : "disabled"
  }.`;
}

function getValues() {
  this.color = document.getElementById("colorOptions").value;
  this.wheels = document.getElementById("wheelOptions").value;
  this.trim = document.getElementById("trimOptions").value;
  this.interior = document.getElementById("interiorOptions").value;
  setBooleanEnhanced();
  setBooleanFull();
  howFast();
  text();
  console.log(details());
  return false;
}

function howFast() {
  if (this.trim === "Plaid") return console.log("the top speed is 200");
  else console.log("the top speed is 149");
}

function text() {
  const textElement = document.createElement("p");
  textElement.innerText = details();
  document.body.appendChild(textElement);
}
function setBooleanEnhanced() {
  if (document.getElementById("enhancedfeatures").value === "Enabled")
    return (this.enhancedAutoPilot = true);
  else document.getElementById("enhancedfeatures").value === "Disabled";
  return (this.enhancedAutoPilot = false);
}
function setBooleanFull() {
  if (document.getElementById("fSDCF").value === "Enabled")
    return (this.fullSelfDrivingCapability = true);
  else document.getElementById("fSDCF").value === "Disabled";
  return (this.fullSelfDrivingCapability = false);
}
// function details2() {
//   return `Color is ${this.color}, trim is ${this.trim}, wheels are ${
//     this.wheels
//   }, interior is ${this.interior}, ehanced auto pilot is ${
//     this.enhancedAutoPilot ? "selected" : "not selected"
//   }, and full self driving mode is ${
//     this.fullSelfDrivingCapability ? "selected" : "not selected"
//   }`;
// }
