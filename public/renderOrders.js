const mainEl = document.getElementById("main");

// interface Order {
//   deliveryaddress: string;
//   email: string;
//   id: number;
//   loyaltycardcode: string;
//   orderItems: {
//     fooditemid: number;
//     id: number;
//     orderid: number;
//     quantity: number
//   }[];
//   payedwith: 'CASH' | 'CARD';
//     phone: string;
//     price: number;
//     restaurant: 'MAIN_ST' | 'JOHN_RD' | 'HARRY_BLVD'
//     tax: number;
//     tips: number;
//     total:  number;
// }

const renderOrders = (orders) => {
  fetch("/api/order")
    .then((response) => response.json())
    .then((data) => {
      const orders = data;
      mainEl.innerHTML = "";
      orders.forEach((order) => {
        const orderEl = document.createElement("div");
        orderEl.classList = "card p-4 m-4 border border-gray-400";
        orderEl.innerHTML = `
          <h2>Order #${order.id}</h2>
          <p>Restaurant: ${order.restaurant}</p>
          <p>Delivery Address: ${order.deliveryaddress}</p>
          <p>Email: ${order.email}</p>
          <p>Phone: ${order.phone}</p>
          <p>Payed With: ${order.payedwith}</p>
          <p>Tips: $${(Math.ceil(order.tips * 100) / 100).toFixed(2)}</p>
          <p>Total: $${(Math.ceil(order.total * 100) / 100).toFixed(2)}</p>
        `;
        mainEl.appendChild(orderEl);
      });
    });
};

renderOrders();
