import React, { useState, useEffect } from 'react';
import './App.css';
import KaushanFont from './kaushan-script/KaushanScript-Regular.otf';

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
              <span className='l1'>Hong</span> 
              <span className='l2'>Kong</span>
            </div>
            <p>LOGO HERE</p>
          </div>
          <div className="right-menu">
            <div className={`selected-menu ${selected ? 'show' : ''}`}>
              {selected === 'Lunch' ? (
                <div>
                  <h3>Lunch Menu</h3>
                  <p>Here is the lunch menu.</p>
                </div>
              ) : (
                <div>
                  <h3>Dinner Menu</h3>
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
