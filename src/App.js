import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'; // Import necessary components
import FAQ from './Faq';
import LunMenu from './LunMenu';
import DinMenu from './DinMenu';
import AboutUs from './AboutUs';
import logo from './logo.png';
import './App.css';

function App() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const faqData = [
    { question: "What is the difference between the chow mein, lo mein, and chow mei fun?", answer: "The chow mein is a vegetable dish, the lo mein is soft noodles with brown sauce, and the chow mei fun is the thin rice noodles." },
    { question: "What is the difference between the large and combination sizes?", answer: "Large sizes comes with more entree than the combination and a small side of white rice. The combination is half pork fried rice, half entree, and comes with a side of eggroll." },
    { question: "Do you offer delivery?", answer: "No, unfortunately we do not offer delivery anymore." },
    { question: "Can you substitute certain items in a meal for another item?", answer: "Yes, typically most people tend to do substitution in our combinations meals. Some people prefer spring rolls or crab rangoon over pork eggrolls, and we are happy to accommodate that." },
    { question: "Can we modify the dishes to fit our preferences?", answer: "Yes, we can usually modify each dish to individual preferences. This includes adjusting the amount of spice, sauce, vegetables, protein, and other ingredients. For some dishes, we can also substitute white rice with fried rice or lo mein noodles, and vice versa. Please note that some modifications may incur an additional charge." },
    { question: "If I do not like a certain item, do I have to keep it in my order?", answer: "No, if there are items that come with the meal, you can ask us not to include them. This includes, but is not limited to, white rice, egg rolls, and sauces." },
    { question: "What payments do you take and can you take it over the phone?", answer: "We accept cash, and cards. We take Visa, MasterCard, Discover, and Apple Pay. We DO NOT accept card payments over the phone, due to credit card frauds in the past." }
  ];

  useEffect(() => {
    if (location.pathname !== '/about-us') {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const currentMinute = currentDate.getMinutes();
      const currentDecimalTime = currentHour + currentMinute / 60;

      const newSelection = currentDecimalTime >= 10.5 && currentDecimalTime < 15 ? 'Lunch' : 'Dinner';
      setSelected(newSelection);
    } else {
      setSelected(null);
    }
  }, [location]);

  const handleSelect = (selection) => {
    if (selected !== selection) { // Only update if selection is different
      setSelected(selection);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {location.pathname === '/about-us' ? ( // Conditional toolbar rendering
          <div className="toolbar about-toolbar"> {/* About Us toolbar */}
            <button className="toolbar-button" onClick={() => navigate('/')}>
              Home
            </button>
          </div>
        ) : (
          <div className="toolbar"> {/* Main toolbar */}
            <button className="toolbar-button" onClick={() => navigate('/about-us')}>
              About Us
            </button>
            <button
              className={`toolbar-button ${selected === 'Lunch' ? 'selected' : ''}`}
              onClick={() => handleSelect('Lunch')}
            >
              Lunch
            </button>
            <button
              className={`toolbar-button ${selected === 'Dinner' ? 'selected' : ''}`}
              onClick={() => handleSelect('Dinner')}
            >
              Dinner
            </button>
          </div>
        )}

        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/" element={
            <> {/* Fragment to wrap multiple elements */}
              <div className="content">
                <div className="left-box">
                  <div className='name'>
                    <span className='nl1'>Hong</span>
                    <span className='nl2'>Kong</span>
                  </div>
                  <img src={logo} alt="Logo" className="logo" />
                  <div className='addr'>
                    <span className='al1'>1523 E. Markland Ave</span>
                    <span className='al2'>Kokomo, IN 46901</span>
                  </div>
                  <div className='phone'>
                    <span className='num1'>765-457-1919</span>
                    <span className='num2'>765-457-1188</span>
                  </div>
                  <div className='hours'>
                    <span className='hrtxt'>Hours</span>
                    <span className='days'>Sunday: 11:30am - 9:30pm</span>
                    <span className='days'>Monday: Closed</span>
                    <span className='days'>Tuesday: 10:30am - 9:30pm</span>
                    <span className='days'>Wednesday: 10:30am - 9:30pm</span>
                    <span className='days'>Thursday: 10:30am - 9:30pm</span>
                    <span className='days'>Friday: 10:30am - 9:30pm</span>
                    <span className='days'>Saturday: 10:30am - 9:30pm</span>
                  </div>
                </div>
                <div className="right-menu">
                  <div className={`selected-menu ${selected ? 'show' : ''}`}>
                    {selected === 'Lunch' ? <LunMenu /> : <DinMenu />}
                  </div>
                </div>
              </div>
              <FAQ data={faqData} />
            </>
          } />
        </Routes>
      </header>
    </div>
  );
}

export default App;
