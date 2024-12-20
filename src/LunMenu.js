import React from 'react';
import './LunMenu.css';

const menuData = [
    {
        category: 'Chicken',
        items: [
            { id: 'L1.', name: 'General Tso\'s Chicken', price: '7.29', spicy: true },
            { id: 'L2.', name: 'Chicken Chow Mein', price: '7.29', spicy: false },
            { id: 'L3.', name: 'Chicken w/ Chinese Vegetable', price: '7.29', spicy: false },
            { id: 'L4.', name: 'Curry Chicken', price: '7.29', spicy: true },
            { id: 'L5.', name: 'Sweet & Sour Chicken', price: '7.29', spicy: false },
            { id: 'L6.', name: 'Chicken w/ Broccoli', price: '7.29', spicy: false },
            { id: 'L7.', name: 'Chicken Broccoli w/ Garlic Sauce', price: '7.29', spicy: true },
            { id: 'L8.', name: 'Diced Chicken w/ Cashew Nuts', price: '7.29', spicy: false },
            { id: 'L9.', name: 'Chicken w/ Hot Pepper Sauce', price: '7.29', spicy: true },
            { id: 'L10.', name: 'Chicken w/ Garlic Sauce', price: '7.29', spicy: true },
            { id: 'L11.', name: 'Kung Pao Chicken', price: '7.29', spicy: true },
            { id: 'L12.', name: 'Chicken Lo Mein', price: '7.29', spicy: false },
            { id: 'L13.', name: 'Moo Goo Gai Pan', price: '7.29', spicy: false },
            { id: 'L14.', name: 'Sesame Chicken', price: '7.29', spicy: true },
            { id: 'L15.', name: 'Chicken w/ Black Pepper', price: '7.29', spicy: false },
            { id: 'L16.', name: 'Hunan Chicken', price: '7.29', spicy: true },
            { id: 'L17.', name: 'Chicken w/ Peanut Butter Sauce', price: '7.29', spicy: false },
            { id: 'L18.', name: 'Chicken w/ Orange Flavor', price: '7.29', spicy: true },
            { id: 'L19.', name: 'Chicken w/ Mixed Vegetable', price: '7.29', spicy: false },
        ],
    },
    {
        category: 'Beef',
        items: [
            { id: 'L21.', name: 'Beef w/ Broccoli', price: '7.29', spicy: false },
            { id: 'L22.', name: 'Pepper Steak w/ Onion', price: '7.29', spicy: false },
            { id: 'L23.', name: 'Beef w/ Hot Pepper Sauce', price: '7.29', spicy: true },
            { id: 'L24.', name: 'Hunan Beef', price: '7.29', spicy: true },
            { id: 'L25.', name: 'Beef w/ Garlic Sauce', price: '7.29', spicy: true },
            { id: 'L26.', name: 'Szechaun Beef', price: '7.29', spicy: true },
        ]
    },
    {
        category: 'Shrimp',
        items: [
            { id: 'L28.', name: 'Shrimp w/ Broccoli', price: '7.29', spicy: false },
            { id: 'L29.', name: 'Shrimp Chop Suey', price: '7.29', spicy: false },
            { id: 'L30.', name: 'Shrimp w/ Cashew Nuts', price: '7.29', spicy: false },
            { id: 'L31.', name: 'Shrimp w/ Lobster Sauce', price: '7.29', spicy: false },
            { id: 'L32.', name: 'Kung Pao Shrimp', price: '7.29', spicy: true },
            { id: 'L33.', name: 'Shrimp w/ Garlic Sauce', price: '7.29', spicy: true },
            { id: 'L34.', name: 'Shrimp w/ Chinese Vegetable', price: '7.29', spicy: false },
        ]
    },
    {
        category: 'Pork',
        items: [
            { id: 'L36.', name: 'Pork Chow Mein', price: '7.29', spicy: false },
            { id: 'L37.', name: 'Pork w/ Chinese Vegetable', price: '7.29', spicy: false },
            { id: 'L39.', name: 'Pork w/ Broccoli', price: '7.29', spicy: false },
            { id: 'L40.', name: 'Pork Lo Mein', price: '7.29', spicy: false },
            { id: 'L41.', name: 'Boneless Spare Ribs', price: '7.29', spicy: false },
        ]
    },
    {
        category: 'Extra',
        items: [
            { id: 'L43.', name: 'Triple Delight', price: '7.29', spicy: true },
            { id: 'L44.', name: 'Broccoli w/ Garlic Sauce', price: '7.29', spicy: true },
            { id: 'L45.', name: 'Mixed Vegetables', price: '7.29', spicy: false },
            { id: 'L46.', name: 'Shrimp & Chicken w/ Broccoli', price: '7.29', spicy: false },
            { id: 'L47.', name: 'Diced Chicken & Shrimp w/ Cashew Nuts', price: '7.29', spicy: false },
            { id: 'L48.', name: 'Bean Curd Home Style', price: '7.29', spicy: false },
        ]
    },
]

const C = menuData.find(category => category.category === 'Chicken');
const B = menuData.find(category => category.category === 'Beef');
const S = menuData.find(category => category.category === 'Shrimp');
const P = menuData.find(category => category.category === 'Pork');
const E = menuData.find(category => category.category === 'Extra');

const LunMenu = () => {
    return (
        <div className="menu-container">
            <h1 className='lunch' style={{ marginBottom: '5px' }}>Lunch Special</h1>
            <div className='comment2' style={{ textAlign: 'center', display: 'block' }}>
                <span>(Everyday: 10:30am - 3:00pm)</span>
            </div>
            <div className='comment2' style={{ textAlign: 'center', display: 'block' }}>
                <span>(w/ White Rice or Fried Rice)</span>
            </div>
            <div className='c1'>
                <div className='chicken'>
                    <h2 className='h22'>Chicken</h2>
                    <div className='comment2'>
                        &nbsp;
                    </div>
                    {C && C.items.map(item => (
                        <p className='p2' key={item.name} >
                            <span className={`item-name ${item.spicy ? 'spicy-text' : ''}`}>
                                {item.id} {item.name}
                            </span>
                            <span className={`item-price ${item.spicy ? 'spicy-text' : ''}`}>
                                {item.price}
                            </span>
                        </p>
                    ))}
                </div>
                <div className='beef'>
                    <h2 className='h22'>Beef</h2>
                    <div className='comment2'>
                        &nbsp;
                    </div>
                    {B && B.items.map(item => (
                        <p className='p2' key={item.name}>
                            <span className={`item-name ${item.spicy ? 'spicy-text' : ''}`}>
                                {item.id} {item.name}
                            </span>
                            <span className={`item-price ${item.spicy ? 'spicy-text' : ''}`}>
                                {item.price}
                            </span>
                        </p>
                    ))}
                </div>
            </div>
            <div className='c2'>
                <div className='shrimp'>
                    <h2 className='h22'>Shrimp</h2>
                    <div className='comment2'>
                        &nbsp;
                    </div>
                    {S && S.items.map(item => (
                        <p className='p2' key={item.name}>
                            <span className={`item-name ${item.spicy ? 'spicy-text' : ''}`}>
                                {item.id} {item.name}
                            </span>
                            <span className={`item-price ${item.spicy ? 'spicy-text' : ''}`}>
                                {item.price}
                            </span>
                        </p>
                    ))}
                </div>
                <div className='pork'>
                    <h2 className='h22'>Pork</h2>
                    <div className='comment2'>
                        &nbsp;
                    </div>
                    {P && P.items.map(item => (
                        <p className='p2' key={item.name}>
                            <span className={`item-name ${item.spicy ? 'spicy-text' : ''}`}>
                                {item.id} {item.name}
                            </span>
                            <span className={`item-price ${item.spicy ? 'spicy-text' : ''}`}>
                                {item.price}
                            </span>
                        </p>
                    ))}
                </div>
                <div className='extra'>
                    <h2 className='h22'>Others</h2>
                    <div className='comment2'>
                        &nbsp;
                    </div>
                    {E && E.items.map(item => (
                        <p className='p2' key={item.name}>
                            <span className={`item-name ${item.spicy ? 'spicy-text' : ''}`}>
                                {item.id} {item.name}
                            </span>
                            <span className={`item-price ${item.spicy ? 'spicy-text' : ''}`}>
                                {item.price}
                            </span>
                        </p>
                    ))}
                </div>
            </div>
            <div className='c3'>
                <h2 className='h22' style={{ marginBottom: '10px' }}>Party Tray Size $43.99 ea.</h2>
                <div className='party' style={{ textAlign: 'center', display: 'block' }}>
                    <span style={{ color: 'red' }}>General Tso's Chicken</span>
                </div>
                <div className='party' style={{ textAlign: 'center', display: 'block' }}>
                    <span style={{ color: 'red' }}>Sesame Chicken</span>
                </div>
                <div className='party' style={{ textAlign: 'center', display: 'block' }}>
                    <span>Beef w/ Broccoli</span>
                </div>
                <div className='party' style={{ textAlign: 'center', display: 'block' }}>
                    <span>Pepper Steak w/ Onion</span>
                </div>
                <div className='party' style={{ textAlign: 'center', display: 'block' }}>
                    <span>Chicken w/ Broccoli</span>
                </div>
                <div className='note'>
                    <h2 className='h22'>Note:</h2>
                    <p className='p2' style={{lineHeight:'30px'}}>Party size is available during both lunch and dinner time. You are also not restricted to only ordering from lunch menu during lunch time.</p>
                </div>
            </div>
        </div>
    );
};

export default LunMenu;
