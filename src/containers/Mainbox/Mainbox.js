import React, { Component } from 'react';
import Tabs from '../../components/UI/Tabs/Tabs';
import classes from './Mainbox.css';
// import MultipleChoice from '../../components/UI/Questions/MultipleChoice/MultipleChoice';
// import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';
import CreateMultipleChoice from '../../components/UI/CreateQuestion/CreateMultipleChoice/CreateMultipleChoice';
import CreateTrueFalse from '../../components/UI/CreateQuestion/CreateTrueFalse/CreateTrueFalse';
import Aux from '../../hoc/Auxiliary';

import QuestionsBox from '../QuestionsBox/QuestionsBox';

// import MdAdd from '@material-ui/icons/Add';
// import MdClose from '@material-ui/icons/Clear';
// import MIcon from '@material-ui/icons/Reorder';
// import TIcon from '@material-ui/icons/DragHandle';
// import SIcon from '@material-ui/icons/Remove';


class Mainbox extends Component {

  questionRef = React.createRef();
  inputARef = React.createRef();
  inputBRef = React.createRef();
  inputCRef = React.createRef();
  inputDRef = React.createRef();
  optionARef = React.createRef();
  optionBRef = React.createRef();
  optionCRef = React.createRef();
  optionDRef = React.createRef();

  state = {
    fabisOpen: false,
    newMultiple: false,
    newTrueFalse: false,
    newQuestion: {
      question: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      answer: ''
    }
  }

  createNewMquestionHandler = (e) => {

    e.preventDefault();

    let answer = '';

    if (this.optionARef.current.checked) {
      answer = this.inputARef.current.value;
    } else if (this.optionBRef.current.checked) {
      answer = this.inputBRef.current.value;
    } else if (this.optionCRef.current.checked) {
      answer = this.inputCRef.current.value;
    } else if (this.optionDRef.current.checked) {
      answer = this.inputDRef.current.value;
    }

    this.setState(
      {
        newMultiple: false,
        newQuestion: {
          question: this.questionRef.current.value,
          optionA: this.inputARef.current.value,
          optionB: this.inputBRef.current.value,
          optionC: this.inputCRef.current.value,
          optionD: this.inputDRef.current.value,
          answer: answer
        }
      }
    );

  }

  createNewTFquestionHandler = (e) => {

    e.preventDefault();

    let answer;

    if (this.optionARef.current.checked) {
      answer = true;
    } else if (this.optionBRef.current.checked) {
      answer = false;
    }

    this.setState(
      {
        newTrueFalse: false,
        newQuestion: {
          question: this.questionRef.current.value,
          optionA: 'TRUE',
          optionB: 'FALSE',
          answer: answer
        }
      }
    );
  }


  newMultipleHandler = () => {
    this.setState({ fabisOpen: false, newMultiple: true });
  }

  newTrueFalseHandler = () => {
    this.setState({ fabisOpen: false, newTrueFalse: true });
  }

  fabHandler = () => {
    this.setState((prevState) => {
      return ({ fabisOpen: !prevState.fabisOpen });
    });
  }

  closeNewQuestionHandler = () => {
    this.setState({ fabisOpen: false, newMultiple: false, newTrueFalse: false });
  }

  render() {

    return (
      <Aux>
        <div className={classes.Mainbox}>

          <Tabs>
            <div label="Questions" >
              <QuestionsBox 
              fabisOpen={this.state.fabisOpen}
              fabHandler={this.fabHandler}
              newTrueFalseHandler={this.newTrueFalseHandler}
              newMultipleHandler={this.newMultipleHandler} />
              {/* <div className={classes.Grid}>
                {this.props.questions.map((question) => {
                  return (
                    <MultipleChoice key={question.id} question={question} />
                  )
                })} */}

            </div>
            <div label="Assignments">
              Assignments Tab
      </div>
            <div label="Announcements">
              Announcements Tab
      </div>
            <div label="Subscribers">
              Subscribers Tab
        </div>
          </Tabs>

{true}

          {/* <div style={{ display: 'ruby-text-container' }}>
            <FloatingMenu
              slideSpeed={500}
              direction="up"
              spacing={8}
              isOpen={this.state.fabisOpen}
            >
              <MainButton
                iconResting={<MdAdd style={{ fontSize: 20 }} nativeColor="white" />}
                iconActive={<MdClose style={{ fontSize: 20 }} nativeColor="white" />}
                backgroundColor="red"
                onClick={this.fabHandler}
                size={56}
              />
              <ChildButton
                icon={<SIcon style={{ fontSize: 20 }} nativeColor="black" />}
                backgroundColor="white"
                size={40}
                onClick={() => console.log('First button clicked')}
              />
              <ChildButton
                icon={<TIcon style={{ fontSize: 20 }} nativeColor="black" />}
                backgroundColor="white"
                size={40}
                onClick={this.newTrueFalseHandler}
              />
              <ChildButton
                icon={<MIcon style={{ fontSize: 20 }} nativeColor="black" />}
                backgroundColor="white"
                size={40}
                onClick={this.newMultipleHandler}
              />
            </FloatingMenu> 
          </div> */}
        </div>
        {this.state.newMultiple ?
          < CreateMultipleChoice
            questionRef={this.questionRef}
            inputARef={this.inputARef}
            inputBRef={this.inputBRef}
            inputCRef={this.inputCRef}
            inputDRef={this.inputDRef}
            optionARef={this.optionARef}
            optionBRef={this.optionBRef}
            optionCRef={this.optionCRef}
            optionDRef={this.optionDRef}
            okButton={this.createNewMquestionHandler}
            cancelButton={this.closeNewQuestionHandler} /> : null}

        {this.state.newTrueFalse ?
          < CreateTrueFalse
            questionRef={this.questionRef}
            optionARef={this.optionARef}
            optionBRef={this.optionBRef}
            okButton={this.createNewTFquestionHandler}
            cancelButton={this.closeNewQuestionHandler} /> : null}
      </Aux>
    );

  }
}


export default Mainbox;