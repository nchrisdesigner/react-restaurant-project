import React from 'react';
import {images} from '../../constants'
import { SubHeading } from '../../components'
import './FindUs.css'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className="p__cormorant" style={{color: '#dcca87', margin: '2rem 0'}}>Opening Hours</p>
        <p className="p__opensans" style={{color: '#dcca87', margin: '2rem 0'}}>Mon - Fri: 10:00am - 02:00am</p>
        <p className="p__opensans" style={{color: '#dcca87', margin: '2rem 0'}}>Sat - SUN: 10:00am - 03:00am</p>
      </div>
      <button className="custom__button" style={{marginTop: '2rem'}}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
