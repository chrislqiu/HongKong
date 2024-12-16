import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.png'

function App() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // Get the current hour and minute
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

    // Convert current time to decimal format (e.g., 10:30 AM becomes 10.5)
    const currentDecimalTime = currentHour + currentMinute / 60;

    // Set the default selection based on time of day in decimal format
    if (currentDecimalTime >= 10.5 && currentDecimalTime < 15) {
      setSelected('Lunch'); // If it's between 10:30 AM and 3:00 PM, default to "Lunch"
    } else {
      setSelected('Dinner'); // Otherwise, default to "Dinner"
    }
  }, []); // Empty dependency array ensures this runs once on component mount

  const handleSelect = (selection) => {
    setSelected(selection);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="toolbar">
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
              {selected === 'Lunch' ? (
                <div>
                  <p>Here is the lunch menu.</p>
                </div>
              ) : (
                <div>
                  <p>Here is the dinner menu.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
