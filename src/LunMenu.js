import React from 'react';
import './LunMenu.css';

const menuData = [
    {
      category: 'Chicken',
      items: [
        { id: 'L1', name: 'General Tso\'s Chicken', price: '7.29', spicy: true},
        { id: 'L2', name: 'Chicken Chow Mein', price: '7.29', spicy: false},
        { id: 'L3', name: 'Chicken w/ Chinese Vegetable', price: '7.29', spicy: false},
        { id: 'L4', name: 'Curry Chicken', price: '7.29', spicy: true},
        { id: 'L5', name: 'Sweet & Sour Chicken', price: '7.29', spicy: false},
        { id: 'L6', name: 'Chicken w/ Broccoli', price: '7.29', spicy: false},
        { id: 'L7', name: 'Chicken Broccoli w/ Garlic Sauce', price: '7.29', spicy: true},
        { id: 'L8', name: 'Diced Chicken w/ Cashew Nuts', price: '7.29', spicy: false},
        { id: 'L9', name: 'Chicken w/ Hot Pepper Sauce', price: '7.29', spicy: true},
        { id: 'L10', name: 'Chicken w/ Garlic Sauce', price: '7.29', spicy: true},
        { id: 'L11', name: 'Kung Pao Chicken', price: '7.29', spicy: true},
        { id: 'L12', name: 'Chicken Lo Mein', price: '7.29', spicy: false},
        { id: 'L13', name: 'Moo Goo Gai Pan', price: '7.29', spicy: false},
        { id: 'L14', name: 'Sesame Chicken', price: '7.29', spicy: true},
        { id: 'L15', name: 'Chicken w/ Black Pepper', price: '7.29', spicy: false},
        { id: 'L16', name: 'Hunan Chicken', price: '7.29', spicy: true},
        { id: 'L17', name: 'Chicken w/ Peanut Butter Sauce', price: '7.29', spicy: false},
        { id: 'L18', name: 'Chicken w/ Orange Flavor', price: '7.29', spicy: true},
        { id: 'L19', name: 'Chicken w/ Mixed Vegetable', price: '7.29', spicy: false},
      ],
    },
    {
    category: 'Beef',
    items: [
        { id: 'L21', name: 'Beef w/ Broccoli', price: '7.29', spicy: false},
        { id: 'L22', name: 'Pepper Steak w/ Onion', price: '7.29', spicy: false},
        { id: 'L23', name: 'Beef w/ Hot Pepper Sauce', price: '7.29', spicy: true},
        { id: 'L24', name: 'Hunan Beef', price: '7.29', spicy: true},
        { id: 'L25', name: 'Beef w/ Garlic Sauce', price: '7.29', spicy: true},
        { id: 'L26', name: 'Szechaun Beef', price: '7.29', spicy: true},
    ]
    },
        {
    category: 'Shrimp',
    items: [
        { id: 'L28', name: 'Shrimp w/ Broccoli', price: '7.29', spicy: false},
        { id: 'L29', name: 'Shrimp Chop Suey', price: '7.29', spicy: false},
        { id: 'L30', name: 'Shrimp w/ Cashew Nuts', price: '7.29', spicy: false},
        { id: 'L31', name: 'Shrimp w/ Lobster Sauce', price: '7.29', spicy: false},
        { id: 'L32', name: 'Kung Pao Shrimp', price: '7.29', spicy: true},
        { id: 'L33', name: 'Shrimp w/ Garlic Sauce', price: '7.29', spicy: true},
        { id: 'L34', name: 'Shrimp w/ Chinese Vegetable', price: '7.29', spicy: false},
    ]
    },
        {
    category: 'Pork',
    items: [
        { id: 'L36', name: 'Pork Chow Mein', price: '7.29', spicy: false},
        { id: 'L37', name: 'Pork w/ Chinese Vegetable', price: '7.29', spicy: false},
        { id: 'L39', name: 'Pork w/ Broccoli', price: '7.29', spicy: false},
        { id: 'L40', name: 'Pork Lo Mein', price: '7.29', spicy: false},
        { id: 'L41', name: 'Boneless Spare Ribs', price: '7.29', spicy: false},
    ]
    },
        {
    category: 'Extra',
    items: [
        { id: 'L43', name: 'Triple Delight', price: '7.29', spicy: true},
        { id: 'L44', name: 'Broccoli w/ Garlic Sauce', price: '7.29', spicy: true},
        { id: 'L45', name: 'Mixed Vegetables', price: '7.29', spicy: false},
        { id: 'L46', name: 'Shrimp & Chicken w/ Broccoli', price: '7.29', spicy: false},
        { id: 'L47', name: 'Diced Chicken & Shrimp w/ Cashew Nuts', price: '7.29', spicy: false},
        { id: 'L48', name: 'Bean Curd Home Style', price: '7.29', spicy: false},
    ]
    },
]
