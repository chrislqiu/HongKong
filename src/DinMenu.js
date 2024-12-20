import React from 'react';
import './DinMenu.css';

const menuData = [
  {
    category: 'Appetizer',
    items: [
      { id: 'A1.', name: 'Chicken on Stick (5)', price: '7.49', spicy: false},
      { id: 'A2.', name: 'Fried Chicken Wings (8)', price: '8.99', spicy: false },
      { id: 'A3.', name: 'Fried Crab Sticks (12)', price: '5.99', spicy: false },
      { id: 'A4.', name: 'Fried Sea Scallops (12)', price: '5.99', spicy: false },
      { id: 'A5.', name: 'Fried Shrimp (12)', price: '6.99', spicy: false },
      { id: 'A6.', name: 'Fried Crab Stick & Sea Scallops', price: '6.99', spicy: false },
      { id: 'A7.', name: 'Roast Pork Egg Roll', price: '1.59', spicy: false },
      { id: 'A8.', name: 'Shrimp Egg Roll', price: '1.89', spicy: false },
      { id: 'A9.', name: 'Crab Rangoon', price: '(4) 4.29  (8) 6.99', spicy: false },
      { id: 'A10.', name: 'Fried Wonton (10)', price: '6.49', spicy: false },
      { id: 'A11.', name: 'BBQ Wings (8)', price: '8.99', spicy: false },
      { id: 'A12.', name: 'Buffalo Wing (8)', price: '8.99', spicy: true },
      { id: 'A13.', name: 'Fried or Steamed Dumplings (8)', price: '6.99', spicy: false },
      { id: 'A14.', name: 'BBQ Boneless Spare Ribs', price: '(S) 7.99  (L)11.99', spicy: false },
      { id: 'A15.', name: 'French Fries', price: '2.99', spicy: false },
      { id: 'A16.', name: 'Chicken Nuggets', price: '4.99', spicy: false },
      { id: 'A17.', name: 'Fried Donut', price: '5.99', spicy: false },
      { id: 'A18.', name: 'Spring Roll', price: '(2) 2.59  (20) 20.99', spicy: false },
    ],
  },
  {
    category: 'Soup',
    items: [
      { id: '1.', name: 'Wonton Soup', smallp: '3.29', largep: '5.99', spicy: false},
      { id: '2.', name: 'Egg Drop Soup', smallp: '3.29', largep: '5.99', spicy: false},
      { id: '3.', name: 'Chicken Noodle or Rice Soup', smallp: '3.29', largep: '5.99', spicy: false},
      { id: '4.', name: 'Wonton Egg Drop Soup', smallp: '3.29', largep: '5.99', spicy: false},
      { id: '5.', name: 'House Special Soup', smallp: '', largep: '7.99', spicy: false},
      { id: '6.', name: 'Hot & Soup Soup', smallp: '3.29', largep: '5.99', spicy: true},
    ],
  },
  {
    category: 'Fried Rice',
    items: [
      { id: '7.', name: 'Plain Fried Rice', smallp: '4.49', largep: '6.49', spicy: false},
      { id: '8.', name: 'Mixed Vegetable Fried Rice', smallp: '5.49', largep: '8.49', spicy: false},
      { id: '9.', name: 'Roast Pork Fried Rice', smallp: '5.49', largep: '8.49', spicy: false},
      { id: '10.', name: 'Chicken Fried Rice', smallp: '5.49', largep: '8.49', spicy: false},
      { id: '11.', name: 'Beef Fried Rice', smallp: '5.99', largep: '8.99', spicy: false},
      { id: '12.', name: 'Shrimp Fried Rice', smallp: '5.99', largep: '8.99', spicy: false},
      { id: '13.', name: 'Ham Fried Rice', smallp: '5.99', largep: '8.99', spicy: false},
      { id: '14.', name: 'Fu Zhou Fried Rice', smallp: '6.49', largep: '9.49', spicy: false},
      { id: '15.', name: 'House Special Fried Rice', smallp: '6.49', largep: '9.49', spicy: false},
    ],
  },
  {
    category: 'Lo Mein',
    items: [
        { id: '16.', name: 'Vegetable Lo Mein', smallp: '6.19', largep: '8.99', spicy: false},
        { id: '17.', name: 'Roast Pork or Chicken Lo Mein', smallp: '6.69', largep: '9.59', spicy: false},
        { id: '18.', name: 'Shrimp or Beef Lo Mein', smallp: '6.69', largep: '9.59', spicy: false},
        { id: '19.', name: 'House Special Lo Mein', smallp: '6.99', largep: '9.99', spicy: false},
    ],
  },
  {
    category: 'Egg Foo Young',
    items: [
        { id: '20.', name: 'Roast Pork or Chicken Egg Foo Young', price: '10.99', spicy: false},
        { id: '21.', name: 'Shrimp or Beed Egg Foo Young', price: '11.29', spicy: false},
        { id: '22.', name: 'Ham Egg Foo Young', price: '10.99', spicy: false},
        { id: '23.', name: 'Mushroom Egg Foo Young', price: '10.99', spicy: false},
    ]
  },
  {
    category: 'Beef',
    items: [
        { id: '24.', name: 'Pepper Steak w/ Onion', smallp: '8.49', largep: '11.99', spicy: false},
        { id: '25.', name: 'Beef w/ Chinese Vegetables', smallp: '8.49', largep: '11.99', spicy: false},
        { id: '26.', name: 'Beef w/ Tomato', smallp: '8.49', largep: '11.99', spicy: false},
        { id: '27.', name: 'Beef w/ Oyster Sauce', smallp: '8.49', largep: '11.99', spicy: false},
        { id: '28.', name: 'Beef w/ Mushroom', smallp: '8.49', largep: '11.99', spicy: false},
        { id: '29.', name: 'Beef w/ Snow Peas', smallp: '8.49', largep: '11.99', spicy: false},
        { id: '30.', name: 'Beef w/ Broccoli', smallp: '8.49', largep: '11.99', spicy: false},
        { id: '31.', name: 'Beef w/ Mixed Vegetables', smallp: '8.49', largep: '11.99', spicy: false},
        { id: '32.', name: 'Beef w/ Garlic Sauce', smallp: '8.49', largep: '11.99', spicy: true},
        { id: '33.', name: 'Szechuan Beef', smallp: '8.49', largep: '11.99', spicy: true},
    ]
  },{
    category: 'Shrimp',
    items: [
        { id: '34.', name: 'Shrimp w/ Lobster Sauce', smallp: '8.49', largep: '11.99', spicy: false},
        { id: '35.', name: 'Shrimp w/ Chinese Vegetables', smallp: '8.49', largep: '11.99', spicy: false},
        { id: '36.', name: 'Shrimp w/ Curry Sauce', smallp: '8.49', largep: '11.99', spicy: true},
        { id: '37.', name: 'Shrimp w/ Snow Peas', smallp: '8.49', largep: '11.99', spicy: false},
        { id: '38.', name: 'Shrimp w/ Broccoli', smallp: '8.49', largep: '11.99', spicy: false},
        { id: '39.', name: 'Shrimp w/ Garlic Sauce', smallp: '8.49', largep: '11.99', spicy: true},
        { id: '40.', name: 'Shrimp w/ Mixed Vegetables', smallp: '8.49', largep: '11.99', spicy: false},
        { id: '41.', name: 'Kung Po Shrimp', smallp: '8.49', largep: '11.99', spicy: true},
        { id: '43.', name: 'Prawns Hunan Style', smallp: '8.49', largep: '11.99', spicy: true},
    ]
  },{
    category: 'Chow Mein',
    items: [
        { id: '44.', name: 'Vegetable Chow Mein', smallp: '6.99', largep: '9.99', spicy: false},
        { id: '45.', name: 'Chicken or Pork Chow Mein', smallp: '6.99', largep: '9.99', spicy: false},
        { id: '46.', name: 'Shirmp or Beef Chow Mein', smallp: '6.99', largep: '9.99', spicy: false},
        { id: '47.', name: 'House Special Chow Mein', smallp: '7.99', largep: '10.99', spicy: false},
    ]
  },{
    category: 'Chicken',
    items: [
        { id: '48.', name: 'Moo Goo Gai Pan', smallp: '7.49', largep: '10.99', spicy: false},
        { id: '49.', name: 'Curry Chicken', smallp: '7.49', largep: '10.99', spicy: true},
        { id: '50.', name: 'Chicken w/ Broccoli', smallp: '7.49', largep: '10.99', spicy: false},
        { id: '51.', name: 'Chicken w/ Chinese Vegetable', smallp: '7.49', largep: '10.99', spicy: false},
        { id: '52.', name: 'Chicken w/ Snow Peas', smallp: '7.49', largep: '10.99', spicy: false},
        { id: '53.', name: 'Chicken w/ Black Bean Sauce', smallp: '7.49', largep: '10.99', spicy: false},
        { id: '54.', name: 'Chicken w/ Garlic Sauce', smallp: '7.49', largep: '10.99', spicy: true},
        { id: '55.', name: 'Chicken Chop Suey', smallp: '7.49', largep: '10.99', spicy: false},
        { id: '56.', name: 'Sweet & Sour Chicken', smallp: '7.49', largep: '10.99', spicy: false},
        { id: '57.', name: 'Chicken Hunan Style', smallp: '7.49', largep: '10.99', spicy: true},
    ]
  },{
    category: 'Roast Pork',
    items: [
        { id: '58.', name: 'Roast Pork w/ Chinese Vegetable', smallp: '7.49', largep: '10.99', spicy: false},
        { id: '59.', name: 'Roast Pork w/ Snow Peas', smallp: '7.49', largep: '10.99', spicy: false},
        { id: '60.', name: 'Roast Pork w/ Broccoli', smallp: '7.49', largep: '10.99', spicy: false},
        { id: '61.', name: 'Roast Pork w/ Mushroom', smallp: '7.49', largep: '10.99', spicy: false},
        { id: '62.', name: 'Roast Pork w/ Oyster Sauce', smallp: '7.49', largep: '10.99', spicy: false},
        { id: '63.', name: 'Roast Pork Chop Suey', smallp: '7.49', largep: '10.99', spicy: false},
        { id: '64.', name: 'Roast Pork w/ Bean Sprouts', smallp: '7.49', largep: '10.99', spicy: false},
    ]
  },{
    category: 'Side Order',
    items: [
        { name: 'Extra White Rice', smallp: '1.99', largep: '3.99', spicy: false},
        { name: 'Extra Crispy Noodles (1 Bag)', smallp: '', largep: '0.75', spicy: false},
        { name: 'Fortune Cookies (5)', smallp: '', largep: '0.50', spicy: false},
        { name: 'Almond Cookies (3)', smallp: '', largep: '1.00', spicy: false},
        { name: 'Sweet & Sour Sauce', smallp: '', largep: '0.75', spicy: false},
        { name: 'Drink', smallp: '0.99', largep: '1.59', spicy: false},
    ]
  },{
    category: 'Vegetable',
    items: [
        { id: '66.', name: 'Sauteed Broccoli', price: '9.29', spicy: false},
        { id: '67.', name: 'Mixed Vegetable', price: '9.29', spicy: false},
        { id: '68.', name: 'String Beans', price: '9.29', spicy: false},
        { id: '69.', name: 'Broccoli w/ Oyster Sauce', price: '9.29', spicy: false},
        { id: '70.', name: 'Broccoli w/ Garlic Sauce', price: '9.29', spicy: true},
        { id: '71.', name: 'Bean Curd Szechuan Style', price: '9.99', spicy: true},
        { id: '72.', name: 'Bean Curd Home Style', price: '9.99', spicy: false},
        { id: '73.', name: 'General Tso\'s Tofu', price: '9.99', spicy: true},
    ]
  },{
    category: 'Mei Fun',
    items: [
        { id: '74.', name: 'Vegetable Mei Fun', price: '8.59', spicy: false},
        { id: '75.', name: 'Roast Pork or Chicken Mei Fun', price: '8.99', spicy: false},
        { id: '76.', name: 'Shrimp or Beef Mei Fun', price: '8.99', spicy: false},
        { id: '77.', name: 'Singapore Mei Fun', price: '8.99', spicy: true},
        { id: '78.', name: 'House Mei Fun', price: '9.99', spicy: false},
    ]
  },{
    category: 'Duck',
    items: [
        { id: '79.', name: 'Crispy Duck', price: '19.99', spicy: false},
        { id: '80.', name: 'Roast Duck w/ Ginger & Scallions', price: '19.99', spicy: false},
        { id: '81.', name: 'Roast Duck w/ Black Bean Sauce', price: '19.99', spicy: false},
        { id: '82.', name: 'Hunan Duck', price: '19.99', spicy: true},
    ]
  },{
    category: 'Diet Dishes',
    items: [
        { id: 'D1.', name: 'Steamed Mixed Vegetables', price: '8.99', spicy: false},
        { id: 'D2.', name: 'Steamed Triple Delight', price: '10.99', spicy: false},
        { id: 'D3.', name: 'Steamed Chicken w/ Mixed Veg.', price: '9.99', spicy: false},
        { id: 'D4.', name: 'Steamed Shrimp w/ Mixed Veg.', price: '10.59', spicy: false},
        { id: 'D5.', name: 'Steamed Bean Curd w/ Broccoli', price: '9.99', spicy: false},
    ]
  },{
    category: 'Combination Plates',
    items: [
        { id: 'C1.', name: 'Chicken or Pork Chow Mein', price: '9.79', spicy: false},
        { id: 'C2.', name: 'Chicken w/ Orange Flavor', price: '9.79', spicy: true},
        { id: 'C3.', name: 'Shrimp Chow Mein', price: '9.79', spicy: false},
        { id: 'C4.', name: 'Pepper Steak w/ Onion', price: '9.79', spicy: false},
        { id: 'C5.', name: 'Beef w/ Broccoli', price: '9.79', spicy: false},
        { id: 'C6.', name: 'Roast Pork Lo Mein', price: '9.79', spicy: false},
        { id: 'C7.', name: 'Sweet & Sour Chicken', price: '9.79', spicy: false},
        { id: 'C8.', name: 'Shrimp w/ Lobster Sauce', price: '9.79', spicy: false},
        { id: 'C9.', name: 'Shrimp w/ Chinese Vegetable', price: '9.79', spicy: false},
        { id: 'C10.', name: 'Boneless Spare Ribs', price: '9.79', spicy: false},
        { id: 'C11.', name: 'Moo Goo Gai Pan', price: '9.79', spicy: false},
        { id: 'C12.', name: 'Chicken w/ Broccoli', price: '9.79', spicy: false},
        { id: 'C13.', name: 'General Tso\'s Chicken', price: '9.79', spicy: true},
        { id: 'C14.', name: 'Kung Po Chicken', price: '9.79', spicy: true},
        { id: 'C15.', name: 'Beef Szechhuan Style', price: '9.79', spicy: true},
        { id: 'C16.', name: 'Hunan Beef', price: '9.79', spicy: true},
        { id: 'C17.', name: 'Chicken w/ Garlic Sauce', price: '9.79', spicy: true},
        { id: 'C18.', name: 'Chicken w/ Cashew Nuts', price: '9.79', spicy: false},
        { id: 'C19.', name: 'Shrimp w/ Broccoli', price: '9.79', spicy: false},
        { id: 'C20.', name: 'Chicken w/ Black Pepper', price: '9.79', spicy: false},
        { id: 'C21.', name: 'Pork, Shrimp, or Chicken Egg Foo Young', price: '9.79', spicy: false},
        { id: 'C22.', name: 'Shrimp & Chicken w/ Broccoli', price: '9.79', spicy: false},
        { id: 'C23.', name: 'Chicken w/ Peanut Butter Sauce', price: '9.79', spicy: false},
        { id: 'C24.', name: 'Sesame Chicken', price: '9.79', spicy: true},
    ]
  },{
    category: 'Our Chef\'s Suggestions',
    items: [
        { id: 'S1.', name: 'Happy Family', price: '13.99', desc: 'Sliced pork, shrimp, beef and chicken sauteed with vegetable tasty brown sauce.', spicy: false},
        { id: 'S2.', name: 'Seafood Delight', price: '16.99', desc: 'Lobster meat, king crab meat, scalleps, jumbo shrimp sauteed with assorted Chinese vegetables.', spicy: false},
        { id: 'S3.', name: 'Sesame Chicken', price: '11.99', desc: '', spicy: true},
        { id: 'S4.', name: 'Orange Flavor Beef', price: '11.99', desc: 'Chunks of beef with orange peel ini spicy sauce.', spicy: true},
        { id: 'S5.', name: 'Dragon Meets Phoenix', price: '13.99', desc: 'Shrimp with assorted vegetables in spicy brown sauce along with chunk of fried chicken in hot general tso\'s sauce.', spicy: true},
        { id: 'S6.', name: 'Shrimp & Pork Hunan Style', price: '11.99', desc: '', spicy: true},
        { id: 'S7.', name: 'Triple Delight', price: '13.99', desc: 'A delightful combination of sliced fresh shirmp, pork, and chicken with leeks in a mild hot bean sauce.', spicy: true},
        { id: 'S8.', name: 'Shrimp, Scallops w/ Garlic Sauce', price: '13.99', desc: 'Fresh Shrimp and scallops sauteed with mixed vegetables in garlic sauce.', spicy: true},
        { id: 'S9.', name: 'Beef w/ Scallops', price: '13.99', desc: 'Fresh beef and scallops sauteed with mixed vegetable in garlic sauce.', spicy: true},
        { id: 'S10.', name: 'Chicken w/ Peanut Butter Sauce', price: '11.99', desc: '', spicy: false},
        { id: 'S11.', name: 'Empire Shrimp', price: '12.99', desc: 'Fresh jumbo shrimp with vegetable cooked with chef special hot brown sauce.', spicy: true},
        { id: 'S12.', name: 'Mongolian Beef', price: '12.99', desc: '', spicy: false},
        { id: 'S13.', name: 'Black Pepper Chicken', price: '11.99', desc: '', spicy: true},
        { id: 'S14.', name: 'Shrimp & Chicken Kung Pao Style', price: '11.99', desc: 'Baby shrimp with chicken sauteed with special Kung Po sauce.', spicy: true},
        { id: 'S15.', name: 'General Tso\'s Chicken', price: '11.99', desc: 'Chunks of boneless chicken sauteed with lots of broccoli in Hunan sauce.', spicy: true},
        { id: 'S16.', name: 'Orange Flavor Chicken', price: '11.99', desc: 'Chunks of chicken with orange peel in spicy sauce.', spicy: true},
        { id: 'S17.', name: 'Hot & Spicy Chicken', price: '11.99', desc: '', spicy: true},
        { id: 'S18.', name: 'Moo Shu Chicken, Pork, Beef, Shrimp, or Veg.', price: '12.99', desc: 'With 4 pieces pancake, Chinese muchroom, bamboo shoots, carrot, scallions, celery,  and vegetable.', spicy: false},
        { id: 'S19.', name: 'Hong Kong Special', price: '16.99', desc: 'Chicken, beef, shrimp, roast pork, scallops, lobster meat sauteed with vegetable in brown sauce.', spicy: false},
    ]
  },
];

const Appetizer = menuData.find(category => category.category === 'Appetizer');
const Soup = menuData.find(category => category.category === 'Soup');
const FR = menuData.find(category => category.category === 'Fried Rice');
const LM = menuData.find(category => category.category === 'Lo Mein');
const EFY = menuData.find(category => category.category === 'Egg Foo Young');
const B = menuData.find(category => category.category === 'Beef');
const S = menuData.find(category => category.category === 'Shrimp');
const CM = menuData.find(category => category.category === 'Chow Mein');
const C = menuData.find(category => category.category === 'Chicken');
const RP = menuData.find(category => category.category === 'Roast Pork');
const SO = menuData.find(category => category.category === 'Side Order');
const V = menuData.find(category => category.category === 'Vegetable');
const MF = menuData.find(category => category.category === 'Mei Fun');
const D = menuData.find(category => category.category === 'Duck');
const DD = menuData.find(category => category.category === 'Diet Dishes');
const CP = menuData.find(category => category.category === 'Combination Plates');
const OCS = menuData.find(category => category.category === 'Our Chef\'s Suggestions');

const DinMenu = () => {
  return (
    <div className="menu-container">
    <div className='col1'>
      <div className='appetizer'>
      <h2>Appetizer</h2>
        {Appetizer && Appetizer.items.map(item => (
          <p key={item.name}>
            <span className="item-name">{item.id} {item.name}</span>
            <span className="item-price">{item.price}</span>
          </p>
        ))}
      </div>
      <div className='soup'>
      <h2>Soup</h2>
        {Soup && Soup.items.map(item => (
          <p key={item.name}>
            <span className="item-name">{item.id} {item.name}</span>
            <span className="item-price">{item.smallp} {item.largep}</span>
          </p>
        ))}
      </div>
      <div className='friedrice'>
      <h2>Fried Rice</h2>
        {FR && FR.items.map(item => (
          <p key={item.name}>
            <span className="item-name">{item.id} {item.name}</span>
            <span className="item-price">{item.smallp} {item.largep}</span>
          </p>
        ))}
      </div>
      <div className='lomein'>
      <h2>Lo Mein</h2>
        {LM && LM.items.map(item => (
          <p key={item.name}>
            <span className="item-name">{item.id} {item.name}</span>
            <span className="item-price">{item.smallp} {item.largep}</span>
          </p>
        ))}
      </div>
      <div className='eggfooyoung'>
      <h2>Egg Foo Young</h2>
        {EFY && EFY.items.map(item => (
          <p key={item.name}>
            <span className="item-name">{item.id} {item.name}</span>
            <span className="item-price">{item.price}</span>
          </p>
        ))}
      </div>
      <div className='hotnspicy'>
      <h2>Hot & Spicy</h2>
      </div>
    </div>
    <div className='col2'>
      <div className='beef'>
      <h2>Beef</h2>
        {B && B.items.map(item => (
          <p key={item.name}>
            <span className="item-name">{item.id} {item.name}</span>
            <span className="item-price">{item.smallp} {item.largep}</span>
          </p>
        ))}
      </div>
      <div className='shrimp'>
      <h2>Shrimp</h2>
        {S && S.items.map(item => (
          <p key={item.name}>
            <span className="item-name">{item.id} {item.name}</span>
            <span className="item-price">{item.smallp} {item.largep}</span>
          </p>
        ))}
      </div>
      <div className='chowmein'>
      <h2>Chow Mein</h2>
        {CM && CM.items.map(item => (
          <p key={item.name}>
            <span className="item-name">{item.id} {item.name}</span>
            <span className="item-price">{item.smallp} {item.largep}</span>
          </p>
        ))}
      </div>
      <div className='chicken'>
      <h2>Chicken</h2>
        {C && C.items.map(item => (
          <p key={item.name}>
            <span className="item-name">{item.id} {item.name}</span>
            <span className="item-price">{item.smallp} {item.largep}</span>
          </p>
        ))}
      </div>
      <div className='roastpork'>
      <h2>Roast Pork</h2>
        {RP && RP.items.map(item => (
          <p key={item.name}>
            <span className="item-name">{item.id} {item.name}</span>
            <span className="item-price">{item.smallp} {item.largep}</span>
          </p>
        ))}
      </div>
      <div className='sideorder'>
      <h2>Side Order</h2>
        {SO && SO.items.map(item => (
          <p key={item.name}>
            <span className="item-name">{item.id} {item.name}</span>
            <span className="item-price">{item.smallp} {item.largep}</span>
          </p>
        ))}
      </div>
      <div className='col3'>
      <div className='vegetable'>
      <h2>Vegetable</h2>
        {V && V.items.map(item => (
          <p key={item.name}>
            <span className="item-name">{item.id} {item.name}</span>
            <span className="item-price">{item.price}</span>
          </p>
        ))}
      </div>
      <div className='meinfun'>
      <h2>Mei Fun</h2>
        {MF && MF.items.map(item => (
          <p key={item.name}>
            <span className="item-name">{item.id} {item.name}</span>
            <span className="item-price">{item.price}</span>
          </p>
        ))}
      </div>
      <div className='duck'>
      <h2>Duck</h2>
        {D && D.items.map(item => (
          <p key={item.name}>
            <span className="item-name">{item.id} {item.name}</span>
            <span className="item-price">{item.price}</span>
          </p>
        ))}
      </div>
      <div className='dietdishes'>
      <h2>Diet Dishes</h2>
        {DD && DD.items.map(item => (
          <p key={item.name}>
            <span className="item-name">{item.id} {item.name}</span>
            <span className="item-price">{item.price}</span>
          </p>
        ))}
      </div>
      <div className='combo'>
      <h2>Combination Plates</h2>
        {CP && CP.items.map(item => (
          <p key={item.name}>
            <span className="item-name">{item.id} {item.name}</span>
            <span className="item-price">{item.price}</span>
          </p>
        ))}
      </div>
      </div>
      <div className='col4'>
      <div className='special'>
      <h2>Our Chef's Suggestions</h2>
          {OCS && OCS.items.map(item => (
            <div key={item.name} className="menu-item"> {/* Key change: wrapping div */}
              <div className="item-name-price"> {/* New div for name and price */}
                <span className="item-name">{item.id} {item.name}</span>
                <span className="item-price">{item.price}</span>
              </div>
              {item.desc && <div className="desc">{item.desc}</div>} {/* Conditional rendering */}
            </div>
          ))}
      </div>
      </div>
    </div>
    </div>
  );
};

export default DinMenu;
