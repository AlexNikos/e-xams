import React from 'react';
import classes from './Toolbar.css';
import Logo from '../Logo/Logo';

const toolbar = (props) => {
    return(
      <header className={classes.Toolbar}>
        <Logo />
        <button onClick={(e) => props.signout(e)}>SIGNOUT</button>
      </header>
    );
}

export default toolbar;