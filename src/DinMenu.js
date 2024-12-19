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
        { id: '58', name: '', smallp: '', largep: ''},
        { id: '59', name: '', smallp: '', largep: ''},
        { id: '60', name: '', smallp: '', largep: ''},
        { id: '61', name: '', smallp: '', largep: ''},
        { id: '62', name: '', smallp: '', largep: ''},
        { id: '63', name: '', smallp: '', largep: ''},
        { id: '64', name: '', smallp: '', largep: ''},
    ]
  },{
    category: 'Side Order',
    items: [
        { name: '', smallp: '', largep: ''},
        { name: '', smallp: '', largep: ''},
        { name: '', smallp: '', largep: ''},
        { name: '', smallp: '', largep: ''},
        { name: '', smallp: '', largep: ''},
        { name: '', smallp: '', largep: ''},
    ]
  },{
    category: 'Vegetable',
    items: [
        { id: '66', name: '', price: ''},
        { id: '67', name: '', price: ''},
        { id: '68', name: '', price: ''},
        { id: '69', name: '', price: ''},
        { id: '70', name: '', price: ''},
        { id: '71', name: '', price: ''},
        { id: '72', name: '', price: ''},
        { id: '73', name: '', price: ''},
    ]
  },{
    category: 'Mei Fun',
    items: [
        { id: '74', name: '', price: ''},
        { id: '75', name: '', price: ''},
        { id: '76', name: '', price: ''},
        { id: '77', name: '', price: ''},
        { id: '78', name: '', price: ''},
    ]
  },{
    category: 'Duck',
    items: [
        { id: '79', name: '', price: ''},
        { id: '80', name: '', price: ''},
        { id: '81', name: '', price: ''},
        { id: '82', name: '', price: ''},
    ]
  },{
    category: 'Diet Dishes',
    items: [
        { id: 'D1', name: '', price: ''},
        { id: 'D2', name: '', price: ''},
        { id: 'D3', name: '', price: ''},
        { id: 'D4', name: '', price: ''},
        { id: 'D5', name: '', price: ''},
    ]
  },{
    category: 'Combination Plates',
    items: [
        { id: 'C1', name: '', price: ''},
        { id: 'C2', name: '', price: ''},
        { id: 'C3', name: '', price: ''},
        { id: 'C4', name: '', price: ''},
        { id: 'C5', name: '', price: ''},
        { id: 'C6', name: '', price: ''},
        { id: 'C7', name: '', price: ''},
        { id: 'C8', name: '', price: ''},
        { id: 'C9', name: '', price: ''},
        { id: 'C10', name: '', price: ''},
        { id: 'C11', name: '', price: ''},
        { id: 'C12', name: '', price: ''},
        { id: 'C13', name: '', price: ''},
        { id: 'C14', name: '', price: ''},
        { id: 'C15', name: '', price: ''},
        { id: 'C16', name: '', price: ''},
        { id: 'C17', name: '', price: ''},
        { id: 'C18', name: '', price: ''},
        { id: 'C19', name: '', price: ''},
        { id: 'C20', name: '', price: ''},
        { id: 'C21', name: '', price: ''},
        { id: 'C22', name: '', price: ''},
        { id: 'C23', name: '', price: ''},
        { id: 'C24', name: '', price: ''},
    ]
  },{
    category: 'Our Chef\'s Suggestions',
    items: [
        { id: 'S1', name: '', price: '', desc: ''},
        { id: 'S2', name: '', price: '', desc: ''},
        { id: 'S3', name: '', price: '', desc: ''},
        { id: 'S4', name: '', price: '', desc: ''},
        { id: 'S5', name: '', price: '', desc: ''},
        { id: 'S6', name: '', price: '', desc: ''},
        { id: 'S7', name: '', price: '', desc: ''},
        { id: 'S8', name: '', price: '', desc: ''},
        { id: 'S9', name: '', price: '', desc: ''},
        { id: 'S10', name: '', price: '', desc: ''},
        { id: 'S11', name: '', price: '', desc: ''},
        { id: 'S12', name: '', price: '', desc: ''},
        { id: 'S13', name: '', price: '', desc: ''},
        { id: 'S14', name: '', price: '', desc: ''},
        { id: 'S15', name: '', price: '', desc: ''},
        { id: 'S16', name: '', price: '', desc: ''},
        { id: 'S17', name: '', price: '', desc: ''},
        { id: 'S18', name: '', price: '', desc: ''},
        { id: 'S19', name: '', price: '', desc: ''},
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