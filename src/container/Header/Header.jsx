import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images'

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quidem maxime doloremque, quisquam ducimus numquam enim itaque quis beatae ea.
      </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header image" />
    </div>
  </div>
);

export default Header;
