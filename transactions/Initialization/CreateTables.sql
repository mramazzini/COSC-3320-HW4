DROP TABLE IF EXISTS MealPackageItem;
DROP TABLE IF EXISTS MealPackage;
DROP TABLE IF EXISTS OrderItem;
DROP TABLE IF EXISTS CreditCardInfo;
DROP TABLE IF EXISTS "Order";
DROP TABLE IF EXISTS LoyaltyCard;
DROP TABLE IF EXISTS FoodItem;
DROP TYPE IF EXISTS Location;
DROP TYPE IF EXISTS PAYMENT_TYPE;

CREATE TABLE IF NOT EXISTS LoyaltyCard (
    code VARCHAR(30) PRIMARY KEY,
    registeredBy VARCHAR(30) NOT NULL
);

CREATE TYPE Location AS ENUM ('MAIN_ST', 'JOHN_RD', 'HARRY_BLVD');
CREATE TYPE PAYMENT_TYPE AS ENUM ('CASH', 'CARD');

CREATE TABLE IF NOT EXISTS FoodItem (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(200) NOT NULL,
    isBeverage BOOLEAN NOT NULL,
    price DECIMAL(5, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS "Order" (
    id INT PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    deliveryAddress VARCHAR(200) NOT NULL,
    restaurant Location NOT NULL,
    payedWith PAYMENT_TYPE NOT NULL,
    tips DECIMAL(5, 2) NOT NULL,

    loyaltyCardCode VARCHAR(30),
    FOREIGN KEY (loyaltyCardCode) REFERENCES LoyaltyCard(code)
);

CREATE TABLE IF NOT EXISTS OrderItem (
    id SERIAL PRIMARY KEY,
    quantity INT NOT NULL,

    foodItemId INT NOT NULL,
    FOREIGN KEY (foodItemId) REFERENCES FoodItem(id),

    orderId INT NOT NULL,
    FOREIGN KEY (orderId) REFERENCES "Order"(id)
);

CREATE TABLE IF NOT EXISTS MealPackage (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(200) NOT NULL,
    price DECIMAL(5, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS MealPackageItem (
    id SERIAL PRIMARY KEY,

    mealPackageId INT NOT NULL,
    FOREIGN KEY (mealPackageId) REFERENCES MealPackage(id),

    foodItemId INT NOT NULL,
    FOREIGN KEY (foodItemId) REFERENCES FoodItem(id),

    quantity INT NOT NULL
);

CREATE TABLE IF NOT EXISTS CreditCardInfo (
    cardID SERIAL PRIMARY KEY,

    orderId INT NOT NULL,
    FOREIGN KEY (orderId) REFERENCES "Order"(id),

    creditCardNumber VARCHAR(30) NOT NULL,
    cvv VARCHAR(3) NOT NULL,
    expirationDate VARCHAR(7) NOT NULL,
    nameOnCard VARCHAR(30) NOT NULL,
    zip VARCHAR(5)
);