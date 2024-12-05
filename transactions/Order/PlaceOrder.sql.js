const placeOrderString = (order) => {
  const orderId = Math.floor(Math.random() * 1000000);

  let orderItem = order.items.map((item) => {
    return `(${orderId}, ${item.id}, ${item.quantity})`;
  });
  let str = orderItem.join(", ");

  optional = "";
  if (order.payedWith == "CARD") {
    const creditCardInfo = order.creditCardInfo;
    optional += `INSERT INTO banktransaction (id, transactiondate, transactiontime, creditcardnumber, orderid) VALUES (
      ${Math.floor(Math.random() * 1000000)},
      '${new Date().toISOString().split("T")[0]}', '${
      new Date().toISOString().split("T")[1].split(".")[0]
    }', 
    ${creditCardInfo.creditCardNumber}, 
    ${orderId});`;
    console.log(optional);
  }
  const final = `
  INSERT INTO "Order" (id, username, email, phone, deliveryAddress, restaurant, payedWith, tips, loyaltyCardCode) VALUES
  (${orderId}, '${order.username}', '${order.email}', '${order.phone}', '${
    order.address
  }', '${order.restaurant}', '${order.payedWith}', ${order.tips}${
    order.loyaltyCardCode ? `, '${order.loyaltyCardCode}'` : ", NULL"
  });
  
  INSERT INTO OrderItem (orderId, foodItemId, quantity) VALUES
  ${str};
  
  ${optional}
  `;
  console.log(final);
  return final;
};

module.exports = placeOrderString;
