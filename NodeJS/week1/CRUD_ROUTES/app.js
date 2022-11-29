import express from "express";
import { crudRoutes } from "./db.js";
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
  console.log(`CRUD Route app listening on port ${port}`);
});

app.get("/crudRoutes", (req, res) => {
  res.send(crudRoutes);
});

app.post("/newCrudRoutes", (req, res) => {
  const new_crud_routes = req.body;
  try {
    if (!isDuplicate(crudRoutes.id)) {
      crudRoutes.id = generateDbId();
      crudRoutes.push(new_crud_routes);
      res.send({
        message: "CRUD Route Added!",
        crudRoutes: crudRoutes,
      });
    } else {
      throw Error("CRUD Route Exists Already Listed.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.patch("/crud_route_updater/:id", (req, res) => {
  let crud_route_updater_new = crudRoutes.find((t) => t.id === +req.params.id);
  try {
    if (crud_route_updater_new) {
      const crud_updater = req.body;
      crud_route_updater_new.id = crud_updater.id;
      res.send(crudRoutes);
    } else {
      throw Error(
        `CRUD Route does not exist. ${req.body.id}/${crud_route_updater_new}`
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.delete("/deleteCrudRoutes/:id", (req, res) => {
  const crudRouteIndex = crudRoutes.findIndex((c) => c.id === +req.params.id);
  try {
    if (crudRouteIndex >= 0) {
      crudRoutes.splice(crudRouteIndex, 1);
      res.send(crudRoutes);
    } else {
      throw Error("CRUD Route does not exist.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});
