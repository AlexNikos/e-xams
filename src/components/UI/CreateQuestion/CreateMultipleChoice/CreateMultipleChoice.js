import React from 'react';
import styles from './CreateMultipleChoice.css';


const createMultipleChoice = (props) => {

  return (
    <div className={styles.Backdrop}>
      <div className={styles.Question}> 
        <form >
        <input type="text" placeholder="Question" ref={props.questionRef}/>
          <div>
            <input style={{width: '20%'}} type="radio"
              name="selection" ref={props.optionARef}/>
            <input style={{width: '80%'}} type="text" placeholder="Option A" ref={props.inputARef}/>
          </div>

          <div>
            <input style={{width: '20%'}} type="radio"
              name="selection" ref={props.optionBRef}/>
            <input style={{width: '80%'}} type="text" placeholder="Option B" ref={props.inputBRef}/>
          </div>

          <div>
            <input style={{width: '20%'}} type="radio"
              name="selection" ref={props.optionCRef}/>
            <input style={{width: '80%'}} type="text" placeholder="Option C" ref={props.inputCRef}/>
          </div>

          <div>
            <input style={{width: '20%'}} type="radio"
              name="selection" ref={props.optionDRef}/>
            <input style={{width: '80%'}} type="text" placeholder="Option D" ref={props.inputDRef}/>
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

export default createMultipleChoice;
