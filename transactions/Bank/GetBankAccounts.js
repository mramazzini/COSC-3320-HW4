//This retrieves the total amount spent by each bank account

const getBankAccountsString = `SELECT  SUM(
        ((OrderItem.quantity * fooditem.price) * 
            CASE 
                WHEN "Order".loyaltycardcode IS NOT NULL THEN 0.9
                ELSE 1
            END
        ) + "Order".tips
    ) AS total_spent, BankAccount.creditcardnumber, BankAccount.creditcardnumber, BankAccount.cvv, BankAccount.expirationdate, BankAccount.nameoncard, BankAccount.zip FROM BankAccount INNER JOIN banktransaction ON banktransaction.creditcardnumber = bankaccount.creditcardnumber INNER JOIN "Order" ON "Order".id = banktransaction.orderid INNER JOIN OrderItem ON OrderItem.orderid = "Order".id INNER JOIN fooditem ON Orderitem.fooditemid = fooditem.id GROUP BY 
    BankAccount.creditcardnumber;
`;

module.exports = getBankAccountsString;
