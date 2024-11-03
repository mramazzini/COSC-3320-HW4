INSERT INTO FoodItem (name, description, isBeverage, price) VALUES
('Hamburger', 'A classic hamburger', FALSE, 5.00),
('Cheeseburger', 'A classic cheeseburger', FALSE, 5.50),
('Fries', 'A portion of fries', FALSE, 2.50),
('Coke', 'A can of coke', TRUE, 1.50),
('Sprite', 'A can of sprite', TRUE, 1.50),
('Fanta', 'A can of fanta', TRUE, 1.50),
('Water', 'A bottle of water', TRUE, 1.00);

INSERT INTO LoyaltyCard (code, registeredBy) VALUES
('123456', 'John Doe'),
('654321', 'Jane Doe');

INSERT INTO FoodItem (name, description, isBeverage, price) VALUES
('Pepperoni Pizza', 'A classic pepperoni pizza', FALSE, 10.00),
('Cheese Pizza', 'A classic cheese pizza', FALSE, 9.00),
('Hawaiian Pizza', 'A classic hawaiian pizza', FALSE, 11.00),
('Bread Sticks', 'A portion of bread sticks', FALSE, 3.50),
('Garlic Knots', 'A portion of garlic knots', FALSE, 3.00),
('Cheesecake', 'A slice of cheesecake', FALSE, 4.00),
('Coke', 'A can of coke', TRUE, 1.50),
('Sprite', 'A can of sprite', TRUE, 1.50),
('Fanta', 'A can of fanta', TRUE, 1.50),
('Water', 'A bottle of water', TRUE, 1.00);

-- Family Combo, 2 Pepperoni Pizzas, 1 Cheese Pizza, 1 Bread Sticks, 1 Garlic Knots
-- Party Combo, 3 Pepperoni Pizzas, 2 Cheese Pizzas, 1 Hawaiian Pizza, 2 Bread Sticks, 2 Garlic Knots
-- Dessert Combo, 2 Cheesecakes
-- Beverage Combo, 4 Cokes, 2 Sprites, 2 Fantas, 4 Waters
INSERT INTO MealPackage (name, description, price) VALUES 
('Family Combo', '2 Pepperoni Pizzas, 1 Cheese Pizza, 1 Bread Sticks, 1 Garlic Knots', 30.00),
('Party Combo', '3 Pepperoni Pizzas, 2 Cheese Pizzas, 1 Hawaiian Pizza, 2 Bread Sticks, 2 Garlic Knots', 45.00),
('Dessert Combo', '2 Cheesecakes', 8.00),
('Beverage Combo', '4 Cokes, 2 Sprites, 2 Fantas, 4 Waters', 20.00);

INSERT INTO MealPackageItem (mealPackageId, foodItemId, quantity) VALUES
(1, 1, 2), -- Family Combo, 2 Pepperoni Pizzas
(1, 2, 1), -- Family Combo, 1 Cheese Pizza
(1, 4, 1), -- Family Combo, 1 Bread Sticks
(1, 5, 1), -- Family Combo, 1 Garlic Knots
(2, 1, 3), -- Party Combo, 3 Pepperoni Pizzas
(2, 2, 2), -- Party Combo, 2 Cheese Pizzas
(2, 3, 1), -- Party Combo, 1 Hawaiian Pizza
(2, 4, 2), -- Party Combo, 2 Bread Sticks
(2, 5, 2), -- Party Combo, 2 Garlic Knots
(3, 6, 2), -- Dessert Combo, 2 Cheesecakes
(4, 7, 4), -- Beverage Combo, 4 Cokes
(4, 8, 2), -- Beverage Combo, 2 Sprites
(4, 9, 2), -- Beverage Combo, 2 Fantas
(4, 10, 4); -- Beverage Combo, 4 Waters

-- INSERT INTO "Order" (restaurant, payedWith, tips, total, tax, loyaltyCardCode) VALUES


-- INSERT INTO OrderItem (foodItemId, orderId, quantity) VALUES


