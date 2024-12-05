const getOrderPriceString = (order) => {
  return `
  SELECT SUM(((FI.price * OI.quantity) * 
            CASE 
                WHEN O.loyaltycardcode IS NOT NULL THEN 0.9
                ELSE 1
            END
        ) + O.tips
    ) AS total_price
    FROM "Order" AS O
    JOIN OrderItem AS OI ON O.id = OI.orderId
    JOIN FoodItem AS FI ON FI.id = OI.foodItemId
    WHERE O.id = ${order.id};
  `;
};

module.exports = getOrderPriceString;
