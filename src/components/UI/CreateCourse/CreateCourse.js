import React from 'react';
import classes from './CreateCourse.css';

const createCourse = (props) => {

  return(
    <div className={classes.Backdrop}>
    <div className={classes.CreateCourse}>
      <form>
        <input type="text" placeholder="Course Name"/>
        <input type="text" placeholder="Site"/>
        <input type="text" placeholder="Informations"/>
      </form>
      <div>
        <button onClick={props.cancelButton}>Cancel</button>
        <button>OK</button>
      </div>
    </div>
    </div>
  );
}

export default createCourse;