import express from "express";
import { caffeine_consumption_amount } from "./db.js";
import bodyParser from "body-parser";
import { generateDbId, isDuplicate } from "./helpers.js";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Caffeine Consumption app listening on port ${port}`);
});

app.get("/caffeine_consumption_amount", (req, res) => {
  res.send(caffeine_consumption_amount);
});

app.post("/caffeine_consumption_amount", (req, res) => {
  const new_caffeine_consumption_amount = req.body;
  try {
    if (!isDuplicate(caffeine_consumption_amount.date)) {
      caffeine_consumption_amount.date = generateDbId();
      caffeine_consumption_amount.push(new_caffeine_consumption_amount);
      res.send({
        message: "Caffeine Consumption Added!",
        caffeine_consumption_amount: caffeine_consumption_amount,
      });
    } else {
      throw Error("Caffeine Consumption Already Listed.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.patch("/caffeine_consumption_amount_updater", (req, res) => {
  let caffeine_consumption_updated = caffeine_consumption_amount.find(
    (t) => t.date === +req.params.date
  );
  try {
    if (caffeine_consumption_updated) {
      const updated_caffeine = req.body;
      caffeine_consumption_updated.date = updated_caffeine.date;
      res.send(caffeine_consumption_amount);
    } else {
      throw Error("Caffeine Consumtion does not exist.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.delete("/caffeine_consumption_amount/:date", (req, res) => {
  const caffeine_consumption_amountIndex =
    caffeine_consumption_amount.findIndex((c) => c.date === +req.params.date);
  try {
    if (caffeine_consumption_amountIndex >= 0) {
      caffeine_consumption_amount.splice(caffeine_consumption_amountIndex, 1);
      res.send(caffeine_consumption_amount);
    } else {
      throw Error("Caffeine Date does not exist.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});
