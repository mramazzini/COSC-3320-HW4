const isValidCardString = (creditCardInfo) => {
  console.log(creditCardInfo);
  return `SELECT * FROM bankaccount WHERE CAST(creditcardnumber AS bigint) = ${creditCardInfo.creditCardNumber} AND CAST(cvv as bigint) = ${creditCardInfo.cvv} AND expirationDate = '${creditCardInfo.expirationDate}' AND nameOnCard = '${creditCardInfo.nameOnCard}' AND CAST(zip as bigint) = ${creditCardInfo.zip}`;
};

module.exports = isValidCardString;
