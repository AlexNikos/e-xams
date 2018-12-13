import React from 'react';
import classes from './Logo.css';
import ImageLogo from '../../../assets/images/logo.jpg';

const logo = () => {

  return (
    <div className={classes.Logo}>
      <img src={ImageLogo} alt="E-xams" />
    </div>
  )
}

export default logo;