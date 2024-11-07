const { sql } = require("../config/connection");
const getFoodItemsString = require("./FoodItem/GetFoodItems.sql");
const getOrderString = require("./Order/PlaceOrder.sql");
const getOrderPriceString = require("./Order/OrderTotalPrice.sql");
const getOrdersString = require("./Order/GetOrders.sql");

const getFoodItems = async () => {
  const result = await sql.unsafe(getFoodItemsString);
  return result;
};

const placeOrder = async (order) => {
  const orderQuery = getOrderString(order);
  const result = await sql.unsafe(orderQuery);
  return result;
};

const getOrders = async () => {
  console.log("Getting Orders");
  const result = await sql.unsafe(getOrdersString());
  console.log(result);
  const orders = await Promise.all(
    result.map(async (order) => {
      const priceRes = await sql.unsafe(getOrderPriceString(order));
      const price = parseFloat(priceRes[0].total_price);
      return {
        ...order,
        price,
        tax: price * 0.07,
        tips: parseFloat(order.tips),
        total: price * 1.07 + parseFloat(order.tips),
      };
    })
  );

  return orders;
};

module.exports = { getFoodItems, placeOrder, getOrders };
