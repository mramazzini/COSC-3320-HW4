const { sql } = require("../config/connection");
const getFoodItemsString = require("./FoodItem/GetFoodItems.sql");
const getOrderString = require("./Order/PlaceOrder.sql");
const getOrderPriceString = require("./Order/OrderTotalPrice.sql");
const getOrdersString = require("./Order/GetOrders.sql");
const getNetRevenueString = require("./Order/GetNetReveueString.sql");

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

const getNetRevenue = async () => {
  const revenue = await sql.unsafe(getNetRevenueString());
  return revenue[0].net_revenue;
};

const checkAllForeignKeys = async () => {  //queries the database for all foreig key relationships between tables & filter for jus key constraints
  const foreignKeyQuery = `
    SELECT conname AS constraint_name,
           confrelid::regclass AS parent_table,
           conrelid::regclass AS child_table,
           a.attname AS foreign_key,
           c.attname AS primary_key
    FROM pg_constraint
    JOIN pg_attribute a ON a.attnum = ANY (conkey) AND a.attrelid = conrelid
    JOIN pg_attribute c ON c.attnum = ANY (confkey) AND c.attrelid = confrelid
    WHERE contype = 'f';
  `;

  const foreignKeys = await sql.unsafe(foreignKeyQuery);

  const results = [];
  for (const fk of foreignKeys) {
    const { child_table, parent_table, foreign_key, primary_key } = fk;
    const missingKeyQuery = `
      SELECT ${child_table}.*
      FROM ${child_table}
      LEFT JOIN ${parent_table}
      ON ${child_table}.${foreign_key} = ${parent_table}.${primary_key}
      WHERE ${parent_table}.${primary_key} IS NULL;
    `;
    const missingKeys = await sql.unsafe(missingKeyQuery);
    if (missingKeys.length > 0) {
      results.push({ child_table, parent_table, missingKeys });
    }
  }
  return results;
};

// Example usage
(async () => {
  const missingForeignKeys = await checkAllForeignKeys();
  console.log("Missing foreign keys:", missingForeignKeys);
})();

module.exports = { getFoodItems, placeOrder, getOrders, getNetRevenue };
