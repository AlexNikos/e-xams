import React from 'react';
import styles from './CreateTrueFalse.css';


const createTrueFalse = (props) => {

  return (
    <div className={styles.Backdrop}>
      <div className={styles.Question}> 
        <form >
        <input type="text" placeholder="Question" ref={props.questionRef}/>
          <div>
            <input style={{width: '20%'}} type="radio"
              name="selection" value={true} ref={props.optionARef}/>
            <p style={{width: '80%'}}>TRUE</p>
          </div>

          <div>
            <input style={{width: '20%'}} type="radio"
              name="selection" value={false} ref={props.optionBRef}/>
            <p style={{width: '80%'}}>FALSE</p>
          </div>

          <div style={{bottom: '0'}}>
            <button onClick={props.cancelButton}>Cancel</button>
            <button onClick={(e)=>props.okButton(e)}>OK</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default createTrueFalse;
