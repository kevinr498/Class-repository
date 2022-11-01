const axios = require("axios");

axios
  .get("http://universities.hipolabs.com/search?country=United+States")
  .then(async (res) => {
    console.log(res.data);
  });
