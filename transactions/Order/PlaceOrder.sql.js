const placeOrderString = (order) => {
  const orderId = Math.floor(Math.random() * 1000000);

  let orderItem = order.items.map((item) => {
    return `(${orderId}, ${item.id}, ${item.quantity})`;
  });
  let str = orderItem.join(", ");
  
  optional = "";

  if (order.payedWith == "CARD") {
    creditCardInfo = order.creditCardInfo;
    optional += `INSERT INTO CreditCardInfo (orderId, creditCardNumber, cvv, expirationDate, nameOnCard, zip) VALUES
    (${orderId}, '${creditCardInfo.creditCardNumber}', '${creditCardInfo.cvv}', ${creditCardInfo.expirationDate}, '${creditCardInfo.nameOnCard}', '${creditCardInfo.zip}');`;
  }

  return `
  INSERT INTO "Order" (id, username, email, phone, deliveryAddress, restaurant, payedWith, tips, loyaltyCardCode) VALUES
  (${orderId}, '${order.username}', '${order.email}', '${order.phone}', '${order.address}', '${order.restaurant}', '${order.payedWith}', ${order.tips}, '${order.loyaltyCardCode}');
  
  INSERT INTO OrderItem (orderId, foodItemId, quantity) VALUES
  ${str};
  
  ${optional}
  `;
};

module.exports = placeOrderString;
