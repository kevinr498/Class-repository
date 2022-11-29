import { caffeine_consumption_amount } from "./db.js";

export const generateDbId = () => {
  return (
    caffeine_consumption_amount[caffeine_consumption_amount.length - 1].date + 1
  );
};

export const isDuplicate = (caffeine_consumption) => {
  return caffeine_consumption_amount.some(
    (t) => t.date === caffeine_consumption_amount.date
  );
};
