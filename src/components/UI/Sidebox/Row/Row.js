import React from 'react';
import classes from './Row.css';

const row = (props) => {

  if(props.selected === props.lesson){

    return(

      <div className={[classes.Row, classes.Selected].join(' ')} onClick={()=>props.handler(props.lesson)}>
        <p> {props.lesson}</p>
      </div>
      )
  } else {

    return(
      <div className={classes.Row} onClick={()=>props.handler(props.lesson)}>
        <p> {props.lesson}</p>
      </div>
      )
  }
  
}

export default row;