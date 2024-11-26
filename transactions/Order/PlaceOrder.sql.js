const placeOrderString = (order) => {
  const orderId = Math.floor(Math.random() * 1000000);

  let orderItem = order.items.map((item) => {
    return `(${orderId}, ${item.id}, ${item.quantity})`;
  });
  let str = orderItem.join(", ") + ";";
  return `
  INSERT INTO "Order" (id, restaurant, payedWith, tips, loyaltyCardCode, username, email, phone, deliveryAddress) VALUES
    (${orderId}, '${order.restaurant}', '${order.payedWith}', ${order.tips}, '${order.loyaltyCardCode}', '${order.username}', '${order.email}', '${order.phone}', '${order.address}');
    
  INSERT INTO OrderItem (orderId, foodItemId, quantity) VALUES
  ${str}
    `;
};

module.exports = placeOrderString;
