// -- TODO: CREATE SQL FILE TO CREATE ORDER ITEM AND ORDER FOR /api/order CONTROLLER

const placeOrderString = (order) => {
  console.log(order);
  return `
      INSERT INTO order_item (food_item_id, quantity, order_id)
      VALUES (${order.foodItemId}, ${order.quantity}, ${order.orderId});
    `;
};

module.exports = placeOrderString;
