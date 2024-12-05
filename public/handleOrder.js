const orderForm = document.getElementById("order-form");

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const menu = document.getElementById("menu");

  const formData = new FormData(orderForm);

  const creditCardInfo = {
    creditCardNumber: formData.get("creditCardNumber"),
    expirationDate: formData.get("expirationDate"),
    cvv: formData.get("cvv"),
    nameOnCard: formData.get("nameOnCard"),
    zip: formData.get("zip"),
  };

  const order = {
    username: formData.get("username"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("deliveryAddress"),
    tips: formData.get("tips"),
    restaurant: formData.get("restaurant"),
    loyaltyCardCode: formData.get("loyaltyCardCode"),
    payedWith: formData.get("payedWith"),
    creditCardInfo: creditCardInfo,
    items: [],
  };

  menu.childNodes.forEach((menuItem) => {
    const quantity = menuItem.querySelector("input").value;
    if (quantity > 0) {
      const item = {
        id: menuItem.id,
        quantity: quantity,
      };
      order.items.push(item);
    }
  });

  if (order.items.length <= 0) {
    alert("Order is invalid, since no items were added.");
    return;
  }

  //check if card exists

  const isValidCard = async (creditCardInfo) => {
    const res = await fetch("/api/bank/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ creditCardInfo }),
    });
    const data = await res.json();

    return data.isValid;
  };

  const completeOrder = async (order) => {
    if (order.payedWith == "CARD") {
      const isValid = await isValidCard(order.creditCardInfo);
      if (!isValid) {
        alert("Invalid credit card information!");
        return;
      }
    }
    try {
      await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      alert("Order submitted!");
    } catch (error) {
      alert("Order failed to submit!");
    }
  };

  completeOrder(order);
});

document.getElementById("payedWith").addEventListener("change", function () {
  var paymentMethod = this.value;
  var creditCardFields = document.getElementById("creditCardFields");

  if (paymentMethod === "CARD") {
    creditCardFields.classList.remove("hidden");
  } else {
    creditCardFields.classList.add("hidden");
  }
});
