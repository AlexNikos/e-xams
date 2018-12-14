import React from 'react';
import classes from './MultipleChoice.css';

const multipleChoice = (props) => {

  return (
    <div className={classes.MultipleChoice}>
      <p>{props.question.question}</p>
      <form >
        <input type="radio" 
        disabled={true}
        checked={props.question.optionA === props.question.answer} 
        name={props.question.optionA} value={props.question.optionA} />{props.question.optionA}<br />
        
        <input type="radio" 
        disabled={true}
        checked={props.question.optionB === props.question.answer} 
        name={props.question.optionB} name={props.question.optionB} value={props.question.optionB} />{props.question.optionB}<br />
        
        <input type="radio" disabled={true} checked={props.question.optionC === props.question.answer} name={props.question.optionC} name={props.question.optionC} value={props.question.optionC} />{props.question.optionC}<br />
        
        <input type="radio" disabled={true} checked={props.question.optionD === props.question.answer} name={props.question.optionD} name={props.question.optionD} value={props.question.optionD} />{props.question.optionD}<br />
      </form>
    </div>
  );
}

export default multipleChoice;