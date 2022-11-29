import { crudRoutes } from "./db.js";

export const generateDbId = () => {
  return crudRoutes[crudRoutes.length - 1].id + 1;
};

export const isDuplicate = (crud_routes) => {
  return crudRoutes.some((t) => t.id === crudRoutes.id);
};
