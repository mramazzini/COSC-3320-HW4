INSERT INTO
    FoodItem (name, description, isBeverage, price)
VALUES
    (
        'Pepperoni Pizza',
        'A classic pepperoni pizza',
        FALSE,
        10.00
    ),
    (
        'Cheese Pizza',
        'A classic cheese pizza',
        FALSE,
        9.00
    ),
    (
        'Hawaiian Pizza',
        'A classic hawaiian pizza',
        FALSE,
        11.00
    ),
    (
        'Bread Sticks',
        'A portion of bread sticks',
        FALSE,
        3.50
    ),
    (
        'Garlic Knots',
        'A portion of garlic knots',
        FALSE,
        3.00
    ),
    (
        'Cheesecake',
        'A slice of cheesecake',
        FALSE,
        4.00
    ),
    ('Coke', 'A can of coke', TRUE, 1.50),
    ('Sprite', 'A can of sprite', TRUE, 1.50),
    ('Fanta', 'A can of fanta', TRUE, 1.50),
    ('Water', 'A bottle of water', TRUE, 1.00),
    ('Hamburger', 'A classic hamburger', FALSE, 5.00),
    ('Fries', 'A portion of fries', FALSE, 2.50),
    (
        'Margherita Pizza',
        'A classic pizza.',
        FALSE,
        12.99
    ),
    (
        'Iced Latte',
        'A chilled iced coffee.',
        TRUE,
        4.50
    ),
    (
        'Caesar Salad',
        'Crisp romaine lettuce salad.',
        FALSE,
        8.25
    ),
    (
        'Smoothie Bowl',
        'A blended fruit base topped with granola.',
        FALSE,
        7.99
    ),
    ('Green Tea', 'Light green tea.', TRUE, 2.75);

INSERT INTO
    LoyaltyCard (code, registeredBy)
VALUES
    ('123456', 'John Doe'),
    ('654321', 'Jane Doe'),
    ('582347', 'Aiden'),
    ('763219', 'Bella'),
    ('405873', 'Carlos'),
    ('982471', 'Diana'),
    ('246589', 'Ethan'),
    ('371205', 'Fiona'),
    ('590462', 'Gabriel'),
    ('874153', 'Hannah'),
    ('348521', 'Liam'),
    ('762984', 'Sophia'),
    ('591423', 'Jackson'),
    ('874162', 'Olivia'),
    ('230847', 'Lucas'),
    ('506291', 'Mia');

-- INSERT INTO
--     MealPackage (name, description, price)
-- VALUES
--     (
--         'Family Combo',
--         '2 Pepperoni Pizzas, 1 Cheese Pizza, 1 Bread Sticks, 1 Garlic Knots',
--         30.00
--     ),
--     (
--         'Party Combo',
--         '3 Pepperoni Pizzas, 2 Cheese Pizzas, 1 Hawaiian Pizza, 2 Bread Sticks, 2 Garlic Knots',
--         45.00
--     ),
--     ('Dessert Combo', '2 Cheesecakes', 8.00),
--     (
--         'Beverage Combo',
--         '4 Cokes, 2 Sprites, 2 Fantas, 4 Waters',
--         20.00
--     ),
--     (
--         'Burger & Fries Combo',
--         '1 classic hamburger and 1 portion of fries at a special price.',
--         6.50
--     ),
--     (
--         'Pizza & Soda Combo',
--         '1 Margherita pizza and 1 can of Coke for a discounted price.',
--         14.49
--     ),
--     (
--         'Smoothie & Green Tea Combo',
--         '1 smoothie bowl and 1 green tea to refresh you.',
--         10.25
--     ),
--     (
--         'Latte & Cake Combo',
--         '1 iced latte with 1 classic hamburger for a fulfilling meal.',
--         9.50
--     ),
--     (
--         'Family Pizza Combo',
--         '2 Margherita pizzas and 1 Caesar salad for the whole family.',
--         30.99
--     ),
--     (
--         'Soda & Fries Combo',
--         '2 cans of Coke and 2 portions of fries for a quick snack.',
--         8.50
--     ),
--     (
--         'Ultimate Beverage Combo',
--         '1 can of Coke, 1 can of Sprite, and 1 bottle of water to keep you refreshed.',
--         4.00
--     ),
--     (
--         'Pizza & Salad Combo',
--         '1 Margherita pizza and 1 Caesar salad for a balanced meal.',
--         21.00
--     ),
--     (
--         'Burger Combo',
--         '1 classic hamburger, 1 portion of fries, and 1 can of Fanta.',
--         9.99
--     ),
--     (
--         'Veggie Refresh Combo',
--         '1 Caesar salad, 1 smoothie bowl, and 1 bottle of water.',
--         17.99
--     ),
--     (
--         'Fries & Drink Combo',
--         '3 portions of fries and 3 cans of Coke for a quick meal.',
--         12.50
--     ),
--     (
--         'Breakfast Combo',
--         '1 iced latte, 1 portion of fries, and 1 green tea to kickstart your day.',
--         11.75
--     );
-- Each combo contains different combinations of items from the menu at special prices!
-- INSERT INTO
--     MealPackageItem (mealPackageId, foodItemId, quantity)
-- VALUES
--     (1, 1, 2), -- Family Combo, 2 Pepperoni Pizzas
--     (1, 2, 1), -- Family Combo, 1 Cheese Pizza
--     (1, 4, 1), -- Family Combo, 1 Bread Sticks
--     (1, 5, 1), -- Family Combo, 1 Garlic Knots
--     (2, 1, 3), -- Party Combo, 3 Pepperoni Pizzas
--     (2, 2, 2), -- Party Combo, 2 Cheese Pizzas
--     (2, 3, 1), -- Party Combo, 1 Hawaiian Pizza
--     (2, 4, 2), -- Party Combo, 2 Bread Sticks
--     (2, 5, 2), -- Party Combo, 2 Garlic Knots
--     (3, 6, 2), -- Dessert Combo, 2 Cheesecakes
--     (4, 7, 4), -- Beverage Combo, 4 Cokes
--     (4, 8, 2), -- Beverage Combo, 2 Sprites
--     (4, 9, 2), -- Beverage Combo, 2 Fantas
--     (4, 10, 4), -- Beverage Combo, 4 Waters
--     (5, 11, 1), -- Burger & Fries Combo, 1 classic hamburger
--     (5, 12, 1), -- Burger & Fries Combo, 1 portion of fries
--     (6, 13, 1), -- Pizza & Soda Combo, 1 Margherita pizza
--     (6, 7, 1), -- Pizza & Soda Combo, 1 can of Coke
--     (7, 16, 1), -- Smoothie & Green Tea Combo, 1 smoothie bowl
--     (7, 17, 1), -- Smoothie & Green Tea Combo, 1 green tea
--     (8, 14, 1), -- Latte & Cake Combo, 1 iced latte
--     (8, 11, 1), -- Latte & Cake Combo, 1 classic hamburger
--     (9, 13, 2), -- Family Pizza Combo, 2 Margherita pizzas
--     (9, 15, 1), -- Family Pizza Combo, 1 Caesar salad
--     (10, 7, 2), -- Soda & Fries Combo, 2 cans of Coke
--     (10, 12, 2), -- Soda & Fries Combo, 2 portions of fries
--     (11, 7, 1), -- Ultimate Beverage Combo, 1 can of Coke
--     (11, 8, 1), -- Ultimate Beverage Combo, 1 can of Sprite
--     (11, 10, 1), -- Ultimate Beverage Combo, 1 bottle of water
--     (12, 13, 1), -- Pizza & Salad Combo, 1 Margherita pizza
--     (12, 15, 1), -- Pizza & Salad Combo, 1 Caesar salad
--     (13, 11, 1), -- Burger Combo, 1 classic hamburger
--     (13, 12, 1), -- Burger Combo, 1 portion of fries
--     (13, 9, 1), -- Burger Combo, 1 can of Fanta-- "Veggie Refresh Combo
--     (14, 15, 1), -- Veggie Refresh Combo, 1 Caesar salad
--     (14, 16, 1), -- Veggie Refresh Combo, 1 smoothie bowl
--     (14, 10, 1), -- Veggie Refresh Combo, 1 bottle of water
--     (15, 12, 3), -- Fries & Drink Combo, 3 portions of fries
--     (15, 7, 3), -- Fries & Drink Combo, 3 cans of Coke-- "Breakfast Combo
--     (16, 14, 1), -- Breakfast Combo, 1 iced latte
--     (16, 12, 1), -- Breakfast Combo, 1 portion of fries
--     (16, 17, 1);
-- Breakfast Combo, 1 green tea
INSERT INTO
    "Order" (
        id,
        restaurant,
        payedWith,
        tips,
        loyaltyCardCode,
        username,
        email,
        phone,
        deliveryAddress
    )
VALUES
    (
        1,
        'MAIN_ST',
        'CASH',
        4.00,
        '123456',
        'JOHN_DOE',
        'J@gmail.com',
        '123456',
        '123 MAIN ST'
    ),
    (
        2,
        'JOHN_RD',
        'CARD',
        2.00,
        '654321',
        'JANE_DOE',
        'JJ@gmail.com',
        '654321',
        '321 JOHN RD'
    ),
    (
        3,
        'HARRY_BLVD',
        'CASH',
        3.00,
        '123456',
        'JACK_DOE',
        'JJJ@gmail.com',
        '123123',
        '123 HARRY BLVD'
    );

INSERT INTO
    OrderItem (foodItemId, orderId, quantity)
VALUES
    (1, 1, 2), -- 2 Hamburger
    (3, 1, 1), -- 1 Fries
    (4, 1, 1), -- 1 Coke
    (1, 2, 1), -- 1 Hamburger
    (2, 2, 1), -- 1 Cheeseburger
    (3, 2, 1), -- 1 Fries
    (5, 2, 1), -- 1 Sprite
    (6, 2, 1), -- 1 Fanta
    (7, 2, 1), -- 1 Water
    (1, 3, 2);

INSERT INTO
    BankAccount (
        creditCardNumber,
        cvv,
        expirationDate,
        nameOnCard,
        zip
    )
VALUES
    (
        '1234567890123456',
        '123',
        '12/2025',
        'Alice Johnson',
        '12345'
    ),
    (
        '2345678901234567',
        '456',
        '11/2024',
        'Bob Smith',
        '67890'
    ),
    (
        '3456789012345678',
        '789',
        '10/2026',
        'Charlie Brown',
        '54321'
    );

INSERT INTO
    BankTransaction (
        transactionDate,
        transactionTime,
        creditCardNumber,
        orderId
    )
VALUES
    ('2024-12-01', '10:30:00', '1234567890123456', 1),
    ('2024-12-01', '11:15:00', '2345678901234567', 2),
    ('2024-12-01', '12:45:00', '3456789012345678', 3);