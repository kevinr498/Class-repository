module.export = {
  save: (jsObject) => {
    return new Promise((resolve, reject) => {
      fs.writeFile("data.json", JSON.stringify(jsObject), (err) => {
        if (err) reject(err);

        resolve("JSON saved to a file");
      });
    });
  },
};

read: () => {
  return new Promise((resolve, reject) => {
    fs.readFile("data.json", "utf-8", (err, data) => {
      if (err) reject(err);
      console.log(data);
      resolve(data);
    });
  });
};
