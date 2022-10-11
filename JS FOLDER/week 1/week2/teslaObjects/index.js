class Vehicle {
  constructor(
    color,
    trim,
    wheels,
    interior,
    enhancedAutoPilot,
    fullSelfDrivingCapability
  ) {
    color = String;
    trim = String;
    wheels = String;
    interior = String;
    enhancedAutoPilot = Boolean;
    fullSelfDrivingCapability = Boolean;
  }

  #numberOfWheels(wheels) {
    wheels = 4;
  }
  #numberOfDoors(doors) {
    doors = 4;
  }
}
function details2() {
  return `Color is ${this.color}, trim is ${this.trim}, wheels are ${
    this.wheels
  }, interior is ${this.interior}, ehanced auto pilot is ${
    this.enhancedAutoPilot ? "selected" : "not selected"
  }, and full self driving mode is ${
    this.fullSelfDrivingCapability ? "selected" : "not selected"
  }`;
}

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
  this.enhancedAutoPilot = document.getElementById("enhancedfeatures").value;
  this.fullSelfDrivingCapability = document.getElementById("fSDCF").value;
  plaid();
  text();
  console.log(details());
  return false;
}

function plaid() {
  if (this.trim === "Plaid") return console.log("the top speed is 200");
  else console.log("the top speed is 149");
}

function text() {
  const textElement = document.createElement("p");
  textElement.innerText = details();
  document.body.appendChild(textElement);
}
