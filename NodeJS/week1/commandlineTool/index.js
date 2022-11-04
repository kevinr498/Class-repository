class Name {
  constructor(name) {
    this.name = name;
  }
}

const axios = require("axios");
const { save, read } = require("./file");
new Name((this.name = String));

function setName() {
  this.name = document.getElementById("nameId").value;
  console.log(this.name);
  return false;
}

axios
  .get("https://api.agify.io/?name=meelad", {
    params: {
      name: this.name,
    },
  })
  .then(async (res) => {
    console.log("Age:", res.data.age, res.data);
    const age = res.data.age;
    const count = res.data.count;
    const name = this.name;
    await save({ value: [{ age, name, count }] });
    console.log(await read());
  });
axios
  .get("https://api.genderize.io/?name=luc", {
    params: {
      name: this.name,
    },
  })
  .then(async (res) => {
    console.log("Probability:", res.data.probability, res.data.gender);
  });
