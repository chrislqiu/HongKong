import React from 'react';
import './DinMenu.css';

const menuData = [
  {
    category: 'Appetizer',
    items: [
      { id: 'A1', name: 'Chicken on Stick (5)', price: '7.49' },
      { id: 'A1', name: 'Fried Chicken Wings (8)', price: '8.99' },
      { id: 'A3', name: 'Fried Crab Sticks (12)', price: '5.99' },
      { id: 'A4', name: 'Fried Sea Scallops (12)', price: '5.99' },
      { id: 'A5', name: 'Fried Shrimp (12)', price: '6.99' },
      { id: 'A6', name: 'Fried Crab Stick & Sea Scallops', price: '6.99' },
      { id: 'A7', name: 'Roast Pork Egg Roll', price: '1.59' },
      { id: 'A8', name: 'Shrimp Egg Roll', price: '1.89' },
      { id: 'A9', name: 'Crab Rangoon', price: '(4) 4.29  (8) 6.99' },
      { id: 'A10', name: 'Fried Wonton (10)', price: '6.49' },
      { id: 'A11', name: 'BBQ Wings (8)', price: '8.99' },
      { id: 'A12', name: 'Buffalo Wing (8)', price: '8.99' },
      { id: 'A13', name: 'Fried or Steamed Dumplings (8)', price: '6.99' },
      { id: 'A14', name: 'BBQ Boneless Spare Ribs', price: '(S) 7.99  (L)11.99' },
      { id: 'A15', name: 'French Fries', price: '2.99' },
      { id: 'A16', name: 'Chicken Nuggets', price: '4.99' },
      { id: 'A17', name: 'Fried Donut', price: '5.99' },
      { id: 'A18', name: 'Spring Roll', price: '(2) 2.59  (20) 20.99' },
    ],
  },
  {
    category: 'Soup',
    items: [
      { id: '1', name: 'Wonton Soup', smallp: '3.29', largep: '5.99'},
      { id: '2', name: 'Egg Drop Soup', smallp: '3.29', largep: '5.99'},
      { id: '3', name: 'Chicken Noodle or Rice Soup', smallp: '3.29', largep: '5.99'},
      { id: '4', name: 'Wonton Egg Drop Soup', smallp: '3.29', largep: '5.99'},
      { id: '5', name: 'House Special Soup', smallp: '', largep: '7.99'},
      { id: '6', name: 'Hot & Soup Soup', smallp: '3.29', largep: '5.99'},
    ],
  },
  {
    category: 'Fried Rice',
    items: [
      { id: '7', name: 'Plain Fried Rice', smallp: '4.49', largep: '6.49'},
      { id: '8', name: 'Mixed Vegetable Fried Rice', smallp: '5.49', largep: '8.49'},
      { id: '9', name: 'Roast Pork Fried Rice', smallp: '5.49', largep: '8.49'},
      { id: '10', name: 'Chicken Fried Rice', smallp: '5.49', largep: '8.49'},
      { id: '11', name: 'Beef Fried Rice', smallp: '5.99', largep: '8.99'},
      { id: '12', name: 'Shrimp Fried Rice', smallp: '5.99', largep: '8.99'},
      { id: '13', name: 'Ham Fried Rice', smallp: '5.99', largep: '8.99'},
      { id: '14', name: 'Fu Zhou Fried Rice', smallp: '6.49', largep: '9.49'},
      { id: '15', name: 'House Special Fried Rice', smallp: '6.49', largep: '9.49'},
    ],
  },
  {
    category: 'Lo Mein',
    items: [
        { id: '16', name: 'Vegetable Lo Mein', smallp: '6.19', largep: '8.99'},
        { id: '17', name: 'Roast Pork or Chicken Lo Mein', smallp: '6.69', largep: '9.59'},
        { id: '18', name: 'Shrimp or Beef Lo Mein', smallp: '6.69', largep: '9.59'},
        { id: '19', name: 'House Special Lo Mein', smallp: '6.99', largep: '9.99'},
    ],
  },
  {
    category: 'Egg Foo Young',
    items: [
        { id: '20', name: 'Roast Pork or Chicken Egg Foo Young', price: '10.99'},
        { id: '21', name: 'Shrimp or Beed Egg Foo Young', price: '11.29'},
        { id: '22', name: 'Ham Egg Foo Young', price: '10.99'},
        { id: '23', name: 'Mushroom Egg Foo Young', price: '10.99'},
    ]
  },
  {
    category: 'Beef',
    items: [
        { id: '24', name: 'Pepper Steak w/ Onion', smallp: '8.49', largep: '11.99'},
        { id: '25', name: 'Beef w/ Chinese Vegetables', smallp: '8.49', largep: '11.99'},
        { id: '26', name: 'Beef w/ Tomato', smallp: '8.49', largep: '11.999'},
        { id: '27', name: 'Beef w/ Oyster Sauce', smallp: '8.49', largep: '11.99'},
        { id: '28', name: 'Beef w/ Mushroom', smallp: '8.49', largep: '11.99'},
        { id: '29', name: 'Beef w/ Snow Peas', smallp: '8.49', largep: '11.99'},
        { id: '30', name: 'Beef w/ Broccoli', smallp: '8.49', largep: '11.99'},
        { id: '31', name: 'Beef w/ Mixed Vegetables', smallp: '8.49', largep: '11.99'},
        { id: '32', name: 'Beef w/ Garlic Sauce', smallp: '8.49', largep: '11.99'},
        { id: '33', name: 'Szechuan Beef', smallp: '8.49', largep: '11.99'},
    ]
  },{
    category: 'Shrimp',
    items: [
        { id: '34', name: 'Shrimp w/ Lobster Sauce', smallp: '8.49', largep: '11.99'},
        { id: '35', name: 'Shrimp w/ Chinese Vegetables', smallp: '8.49', largep: '11.99'},
        { id: '36', name: 'Shrimp w/ Curry Sauce', smallp: '8.49', largep: '11.99'},
        { id: '37', name: 'Shrimp w/ Snow Peas', smallp: '8.49', largep: '11.99'},
        { id: '38', name: 'Shrimp w/ Broccoli', smallp: '8.49', largep: '11.99'},
        { id: '39', name: 'Shrimp w/ Garlic Sauce', smallp: '8.49', largep: '11.99'},
        { id: '40', name: 'Shrimp w/ Mixed Vegetables', smallp: '8.49', largep: '11.99'},
        { id: '41', name: 'Kung Po Shrimp', smallp: '8.49', largep: '11.99'},
        { id: '43', name: 'Prawns Hunan Style', smallp: '8.49', largep: '11.99'},
    ]
  },{
    category: 'Chow Mein',
    items: [
        { id: '44', name: 'Vegetable Chow Mein', smallp: '6.99', largep: '9.99'},
        { id: '45', name: 'Chicken or Pork Chow Mein', smallp: '6.99', largep: '9.99'},
        { id: '46', name: 'Shirmp or Beef Chow Mein', smallp: '6.99', largep: '9.99'},
        { id: '47', name: 'House Special Chow Mein', smallp: '7.99', largep: '10.99'},
    ]
  },{
    category: 'Chicken',
    items: [
        { id: '48', name: 'Moo Goo Gai Pan', smallp: '7.49', largep: '10.99'},
        { id: '49', name: 'Curry Chicken', smallp: '7.49', largep: '10.99'},
        { id: '50', name: 'Chicken w/ Broccoli', smallp: '7.49', largep: '10.99'},
        { id: '51', name: 'Chicken w/ Chinese Vegetable', smallp: '7.49', largep: '10.99'},
        { id: '52', name: 'Chicken w/ Snow Peas', smallp: '7.49', largep: '10.99'},
        { id: '53', name: 'Chicken w/ Black Bean Sauce', smallp: '7.49', largep: '10.99'},
        { id: '54', name: 'Chicken w/ Garlic Sauce', smallp: '7.49', largep: '10.99'},
        { id: '55', name: 'Chicken Chop Suey', smallp: '7.49', largep: '10.99'},
        { id: '56', name: 'Sweet & Sour Chicken', smallp: '7.49', largep: '10.99'},
        { id: '57', name: 'Chicken Hunan Style', smallp: '7.49', largep: '10.99'},
    ]
  },{
    category: 'Roast Pork',
    items: [
        { id: '58', name: 'Roast Pork w/ Chinese Vegetable', smallp: '7.49', largep: '10.99'},
        { id: '59', name: 'Roast Pork w/ Snow Peas', smallp: '7.49', largep: '10.99'},
        { id: '60', name: 'Roast Pork w/ Broccoli', smallp: '7.49', largep: '10.99'},
        { id: '61', name: 'Roast Pork w/ Mushroom', smallp: '7.49', largep: '10.99'},
        { id: '62', name: 'Roast Pork w/ Oyster Sauce', smallp: '7.49', largep: '10.99'},
        { id: '63', name: 'Roast Pork Chop Suey', smallp: '7.49', largep: '10.99'},
        { id: '64', name: 'Roast Pork w/ Bean Sprouts', smallp: '7.49', largep: '10.99'},
    ]
  },{
    category: 'Side Order',
    items: [
        { name: 'Extra White Rice', smallp: '1.99', largep: '3.99'},
        { name: 'Extra Crispy Noodles (1 Bag)', smallp: '', largep: '0.75'},
        { name: 'Fortune Cookies (5)', smallp: '', largep: '0.50'},
        { name: 'Almond Cookies (3)', smallp: '', largep: '1.00'},
        { name: 'Sweet & Sour Sauce', smallp: '', largep: '0.75'},
        { name: 'Drink', smallp: '0.99', largep: '1.59'},
    ]
  },{
    category: 'Vegetable',
    items: [
        { id: '66', name: 'Sauteed Broccoli', price: '9.29'},
        { id: '67', name: 'Mixed Vegetable', price: '9.29'},
        { id: '68', name: 'String Beans', price: '9.29'},
        { id: '69', name: 'Broccoli w/ Oyster Sauce', price: '9.29'},
        { id: '70', name: 'Broccoli w/ Garlic Sauce', price: '9.29'},
        { id: '71', name: 'Bean Curd Szechuan Style', price: '9.99'},
        { id: '72', name: 'Bean Curd Home Style', price: '9.99'},
        { id: '73', name: 'General Tso\'s Tofu', price: '9.99'},
    ]
  },{
    category: 'Mei Fun',
    items: [
        { id: '74', name: 'Vegetable Mei Fun', price: '8.59'},
        { id: '75', name: 'Roast Pork or Chicken Mei Fun', price: '8.99'},
        { id: '76', name: 'Shrimp or Beef Mei Fun', price: '8.99'},
        { id: '77', name: 'Singapore Mei Fun', price: '8.99'},
        { id: '78', name: 'House Mei Fun', price: '9.99'},
    ]
  },{
    category: 'Duck',
    items: [
        { id: '79', name: 'Crispy Duck', price: '19.99'},
        { id: '80', name: 'Roast Duck w/ Ginger & Scallions', price: '19.99'},
        { id: '81', name: 'Roast Duck w/ Black Bean Sauce', price: '19.99'},
        { id: '82', name: 'Hunan Duck', price: '19.99'},
    ]
  },{
    category: 'Diet Dishes',
    items: [
        { id: 'D1', name: 'Steamed Mixed Vegetables', price: '8.99'},
        { id: 'D2', name: 'Steamed Triple Delight', price: '10.99'},
        { id: 'D3', name: 'Steamed Chicken w/ Mixed Veg.', price: '9.99'},
        { id: 'D4', name: 'Steamed Shrimp w/ Mixed Veg.', price: '10.59'},
        { id: 'D5', name: 'Steamed Bean Curd w/ Broccoli', price: '9.99'},
    ]
  },{
    category: 'Combination Plates',
    items: [
        { id: 'C1', name: 'Chicken or Pork Chow Mein', price: '9.79'},
        { id: 'C2', name: 'Chicken w/ Orange Flavor', price: '9.79'},
        { id: 'C3', name: 'Shrimp Chow Mein', price: '9.79'},
        { id: 'C4', name: 'Pepper Steak w/ Onion', price: '9.79'},
        { id: 'C5', name: 'Beef w/ Broccoli', price: '9.79'},
        { id: 'C6', name: 'Roast Pork Lo Mein', price: '9.79'},
        { id: 'C7', name: 'Sweet & Sour Chicken', price: '9.79'},
        { id: 'C8', name: 'Shrimp w/ Lobster Sauce', price: '9.79'},
        { id: 'C9', name: 'Shrimp w/ Chinese Vegetable', price: '9.79'},
        { id: 'C10', name: 'Boneless Spare Ribs', price: '9.79'},
        { id: 'C11', name: 'Moo Goo Gai Pan', price: '9.79'},
        { id: 'C12', name: 'Chicken w/ Broccoli', price: '9.79'},
        { id: 'C13', name: 'General Tso\'s Chicken', price: '9.79'},
        { id: 'C14', name: 'Kung Po Chicken', price: '9.79'},
        { id: 'C15', name: 'Beef Szechhuan Style', price: '9.79'},
        { id: 'C16', name: 'Hunan Beef', price: '9.79'},
        { id: 'C17', name: 'Chicken w/ Garlic Sauce', price: '9.79'},
        { id: 'C18', name: 'Chicken w/ Cashew Nuts', price: '9.79'},
        { id: 'C19', name: 'Shrimp w/ Broccoli', price: '9.79'},
        { id: 'C20', name: 'Chicken w/ Black Pepper', price: '9.79'},
        { id: 'C21', name: 'Pork, Shrimp, or Chicken Egg Foo Young', price: '9.79'},
        { id: 'C22', name: 'Shrimp & Chicken w/ Broccoli', price: '9.79'},
        { id: 'C23', name: 'Chicken w/ Peanut Butter Sauce', price: '9.79'},
        { id: 'C24', name: 'Sesame Chicken', price: '9.79'},
    ]
  },{
    category: 'Our Chef\'s Suggestions',
    items: [
        { id: 'S1', name: 'Happy Family', price: '13.99', desc: 'Sliced pork, shrimp, beef and chicken sauteed with vegetable tasty brown sauce.'},
        { id: 'S2', name: 'Seafood Delight', price: '16.99', desc: 'Lobster meat, king crab meat, scalleps, jumbo shrimp sauteed with assorted Chinese vegetables.'},
        { id: 'S3', name: 'Sesame Chicken', price: '11.99', desc: ''},
        { id: 'S4', name: 'Orange Flavor Beef', price: '11.99', desc: 'Chunks of beef with orange peel ini spicy sauce.'},
        { id: 'S5', name: 'Dragon Meets Phoenix', price: '13.99', desc: 'Shrimp with assorted vegetables in spicy brown sauce along with chunk of fried chicken in hot general tso\'s sauce.'},
        { id: 'S6', name: 'Shrimp & Pork Hunan Style', price: '11.99', desc: ''},
        { id: 'S7', name: 'Triple Delight', price: '13.99', desc: 'A delightful combination of sliced fresh shirmp, pork, and chicken with leeks in a mild hot bean sauce.'},
        { id: 'S8', name: 'Shrimp, Scallops w/ Garlic Sauce', price: '13.99', desc: 'Fresh Shrimp and scallops sauteed with mixed vegetables in garlic sauce.'},
        { id: 'S9', name: 'Beef w/ Scallops', price: '13.99', desc: 'Fresh beef and scallops sauteed with mixed vegetable in garlic sauce.'},
        { id: 'S10', name: 'Chicken w/ Peanut Butter Sauce', price: '11.99', desc: ''},
        { id: 'S11', name: 'Empire Shrimp', price: '12.99', desc: 'Fresh jumbo shrimp with vegetable cooked with chef special hot brown sauce.'},
        { id: 'S12', name: 'Mongolian Beef', price: '12.99', desc: ''},
        { id: 'S13', name: 'Black Pepper Chicken', price: '11.99', desc: ''},
        { id: 'S14', name: 'Shrimp & Chicken Kung Pao Style', price: '11.99', desc: 'Baby shrimp with chicken sauteed with special Kung Po sauce.'},
        { id: 'S15', name: 'General Tso\'s Chicken', price: '11.99', desc: 'Chunks of boneless chicken sauteed with lots of broccoli in Hunan sauce.'},
        { id: 'S16', name: 'Orange Flavor Chicken', price: '11.99', desc: 'Chunks of chicken with orange peel in spicy sauce.'},
        { id: 'S17', name: 'Hot & Spicy Chicken', price: '11.99', desc: ''},
        { id: 'S18', name: 'Moo Shu Chicken, Pork, Beef, Shrimp, or Veg.', price: '12.99', desc: 'With 4 pieces pancake, Chinese muchroom, bamboo shoots, carrot, scallions, celery,  and vegetable.'},
        { id: 'S19', name: 'Hong Kong Special', price: '16.99', desc: 'Chicken, beef, shrimp, roast pork, scallops, lobster meat sauteed with vegetable in brown sauce.'},
    ]
  },
];

const DinMenu = () => {
  return (
    <div className="menu-container">
      {menuData.map((category, index) => (
        <div key={index} className="menu-category">
          <h3 className="category-title">{category.category}</h3>
          <ul className="menu-items">
            {category.items.map((item, index) => (
              <li key={index} className="menu-item">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DinMenu;
