import React from 'react';
import './AboutUs.css'
import time from './timeline.png'

const AboutUs = () => {
    return (
        <div className='outer'>
            <div className="about-us-container">
                <h1 className='aboutUs'>About Us</h1>
            </div>
            <div className='ccontent'>
            Hong Kong is a family-owned restaurant founded by Minsheng Qiu and his son, Zhouqiang Qiu, in 1999. 
            Originally located in Downtown Kokomo, we offered various options such as pickup, delivery, and a buffet. 
            In 2009, we discontinued the buffet and moved to a new location. One of the main reasons for this change 
            was the extensive work involved in preparing and cleaning for the buffet. Our new location on Markland Avenue 
            was a significant improvement, as its prominent position on a main road brought us considerably more business. 
            We continued to offer the same services until October 2023, when we stopped deliveries due to staff shortages.
            </div>
            <div className='shh'>
                Also don't forget, Brandon will always be better.
            </div>
            <div className='timeline'>
                <img className='tl'src={time}></img>
            </div>
        </div>
    );
};
export default AboutUs;
