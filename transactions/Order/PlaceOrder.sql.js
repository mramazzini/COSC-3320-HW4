// -- TODO: CREATE SQL FILE TO CREATE ORDER ITEM AND ORDER FOR /api/order CONTROLLER

const placeOrderString = (order) => {
  console.log(order);
  return `
      INSERT INTO OrderItem
      VALUES (${order.quantity}, ${order.foodItemId}, ${order.id});
    `;
};

const orderTotalPrice = (order) => {
  return `
      SELECT SUM(FI.price)
      FROM "Order" AS O
      JOIN OrderItem AS OI ON O.id = OI.id
      JOIN FoodItem AS FI ON FI.id = OI.orderId
      WHERE O.id = ${order.id}
  `;
};

module.exports = placeOrderString, orderTotalPrice;
