import React from 'react';
import classes from './Sidebox.css';
import Row from './Row/Row';
import Aux from '../../../hoc/Auxiliary';

const sidebox = (props) => {

  const lessons = props.lessons.map(lesson => (
    <Row key={lesson} lesson={lesson} handler={props.handler} selected={props.selected}/>
  ));

  return (
    <div className={classes.Sidebox}>
      <div className={classes.Container}>{lessons}</div>
      <button className={classes.Button} onClick={props.addCourse}>Add Lesson</button>
    </div>
  );

}

export default sidebox;