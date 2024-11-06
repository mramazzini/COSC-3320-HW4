const { sql } = require("../config/connection");
const getFoodItemsString = require("./FoodItem/GetFoodItems.sql");
const getOrderString = require("./Order/PlaceOrder.sql");

const getFoodItems = async () => {
  const result = await sql.unsafe(getFoodItemsString);
  return result;
};

const placeOrder = async (order) => {
  const query = getOrderString(order);
  const result = await sql.unsafe(query);
  return result;
};

module.exports = { getFoodItems, placeOrder };
