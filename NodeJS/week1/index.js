// const util = require("./util");
const axios = require("axios");
const fs = require("fs");
const file = require("./file");

// console.log('hello world')

// const numbers = process.argv;
// console.log(numbers);

// const onlyNumbers = process.argv.slice(2);

// console.log(onlyNumbers);

axios
  .get("https://api.chucknorris.io/jokes/random?category=history")
  .then(async (res) => {
    console.log(res.data.value.split("."));
    const values = res.data.value.split(".");
    const joke = values[0];
    const punchline = values[1];
    await save({ jokes: [{ joke, punchline }] });
  });
