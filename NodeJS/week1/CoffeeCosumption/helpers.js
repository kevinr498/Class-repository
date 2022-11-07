import { caffeine_consumption_amount } from "./db.js";

export const generateDbId = () => {
  return (
    caffeine_consumption_amount[caffeine_consumption_amount.length - 1]
      .caffeine_consumption + 1
  );
};

export const isDuplicate = (caffain_consumption) => {
  return caffeine_consumption_amount.some(
    (c) =>
      c.caffeine_consumption === caffain_consumption.caffeine_consumption ||
      c.date === caffain_consumption.date
  );
};
