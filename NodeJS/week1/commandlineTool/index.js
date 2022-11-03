class Name {
  constructor(name, vars) {
    this.name = name;
    this.vars = vars;
  }
  setName() {
    this.name = document.getElementById("nameId").value;
    console.log(this.name);
  }
}

vars((this.name = String));

const axios = require("axios");
const fs = require("fs");
const { stringify } = require("querystring");
const { save, read } = require("./file");

const name = "Ross";
axios
  .get("https://api.agify.io/?name=meelad", {
    params: {
      name: name,
    },
  })
  .then(async (res) => {
    console.log("Age:", res.data.age, res.data);
    const age = res.data.age;
    const count = res.data.count;
    await save({ value: [{ age, name, count }] });
    console.log(await read());
  });
axios
  .get("https://api.genderize.io/?name=luc", {
    params: {
      name: name,
    },
  })
  .then(async (res) => {
    // console.log("Probability:", res.data.probability, res.data.gender);
  });
