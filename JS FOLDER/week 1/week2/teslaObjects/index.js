class Vehicle {
  #numberOfDoors = 4;
  #numberOfWheels = 4;
  constructor(
    color,
    trim,
    wheels,
    interior,
    enhancedAutoPilot,
    fullSelfDrivingCapability,
    vars
  ) {
    color = String;
    trim = String;
    wheels = String;
    interior = String;
    enhancedAutoPilot = Boolean;
    fullSelfDrivingCapability = Boolean;
    vars = vars;
  }
}
class ModelS {
  #topSpeed = [
    {
      plaid: "the top speed is 200mph",
    },
    { standard: "the top speed is 149mph" },
  ];
  constructor() {}
}
vars(
  (this.color = color),
  (this.trim = trim),
  (this.wheels = wheels),
  (this.interior = interior),
  (this.enhancedAutoPilot = enhancedAutoPilot),
  (this.fullSelfDrivingCapability = fullSelfDrivingCapability)
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
  if (document.getElementById("interiorOptions").value === "Enabled")
    return (this.enhancedAutoPilot = true);
  else this.enhancedAutoPilot = false;
}
function setBooleanFull() {
  if (document.getElementById("fSDCF").value === "Enabled")
    return (this.fullSelfDrivingCapability = true);
  else this.fullSelfDrivingCapability = false;
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
