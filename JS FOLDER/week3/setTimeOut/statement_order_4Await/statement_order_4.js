console.log("<<< Starting >>>");

const squared = async (value) => {
  return new Promise((resolve, reject) => {
    if (Number.isFinite(value)) {
      resolve(value * 2);
    } else {
      reject("The Value parameter is not a valid number");
    }
  });
};

(async () => {
  const results = await squared(1);
  const results2 = await squared(results);
  const results3 = await squared(results2);
  const results4 = await squared(results3);
  const results5 = await squared(results4);
  const results6 = await squared(results5);
  const results7 = await squared(results6);
  const results8 = await squared(results7);
  const results9 = await squared(results8);
  const results10 = await squared(results9);
  console.log(results10);
})();

console.log("<<< Ending >>>");
