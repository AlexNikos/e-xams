import React from 'react';
import classes from './Toolbar.css';
import Logo from '../Logo/Logo';

const toolbar = () => {

  return(
    <header className={classes.Toolbar}>
      <Logo />
    </header>
  );

}

export default toolbar;