const getOrders = () => `
SELECT "Order".*, 
json_agg(OrderItem.*) AS orderItems
FROM "Order"
LEFT JOIN OrderItem ON "Order".id = OrderItem.orderId
GROUP BY "Order".id;`;

module.exports = getOrders;
