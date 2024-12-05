const mainEl = document.getElementById("main");

const renderBankAccounts = () => {
  fetch("/api/bank")
    .then((response) => response.json())
    .then((data) => {
      const accounts = data;
      mainEl.innerHTML = "";
      accounts.forEach((acc) => {
        const accEl = document.createElement("div");
        accEl.classList = "card p-4 m-4 bacc bacc-gray-400";
        console.log(acc);
        accEl.innerHTML = `
          <h2>Account Holder ${acc.nameoncard}</h2>
          <p>Account Balance (Total Spent): ${acc.total_spent}</p>
          <p>Credit Card Number: ${acc.creditcardnumber}</p>
          <p>Zip: ${acc.zip}</p>
          <p>Expiration Date: ${acc.expirationdate}</p>
          <p>CVV: ${acc.cvv}</p>


        `;
        mainEl.appendChild(accEl);
      });
    });
};

renderBankAccounts();
