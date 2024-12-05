const getNetRevenueString = () => {
  return `
    SELECT SUM(((FI.price * OI.quantity)  * 
            CASE 
                WHEN O.loyaltycardcode IS NOT NULL THEN 0.9
                ELSE 1
            END
        ) + O.tips
    ) AS net_revenue
    FROM "Order" AS O
    JOIN OrderItem AS OI ON O.id = OI.orderId
    JOIN FoodItem AS FI ON FI.id = OI.foodItemId;
  `;
};

module.exports = getNetRevenueString;
