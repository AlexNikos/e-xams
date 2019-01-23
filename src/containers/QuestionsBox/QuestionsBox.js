import React, { Component } from 'react';
import styles from './QuestionsBox.css';
import Aux from '../../hoc/Auxiliary';

import MultipleChoice from '../../components/UI/Questions/MultipleChoice/MultipleChoice';
import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';

import MdAdd from '@material-ui/icons/Add';
import MdClose from '@material-ui/icons/Clear';
import MIcon from '@material-ui/icons/Reorder';
import TIcon from '@material-ui/icons/DragHandle';
import SIcon from '@material-ui/icons/Remove';

class QuestionBox extends Component {

  state = {
    
    questionList: [
      {
        id: '1',
        question: 'Question1',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionB'
      },
      {
        id: '2',
        question: 'Question2',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionA'
      },
      {
        id: '3',
        question: 'Question3',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionD'
      },
      {
        id: '4',
        question: 'Question4',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionB'
      },
      {
        id: '5',
        question: 'Question5',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionA'
      },
      {
        id: '6',
        question: 'Question6',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionD'
      },
      {
        id: '7',
        question: 'Question7',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionB'
      },
      {
        id: '8',
        question: 'Question8',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionA'
      },
      {
        id: '9',
        question: 'Question9',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionD'
      },
      {
        id: '10',
        question: 'Question10',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionB'
      },
      {
        id: '11',
        question: 'Question11',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionA'
      },
      {
        id: '12',
        question: 'Question12',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionD'
      }]
  }

  render() {

    return(
      <Aux>
        <div className={styles.Grid}>
        {this.state.questionList.map((question) => {
                  return (
                    <MultipleChoice key={question.id} question={question} />
                  )
                })}
        </div>
        <div style={{ display: 'ruby-text-container' }}>
        <FloatingMenu
              slideSpeed={500}
              direction="up"
              spacing={8}
              isOpen={this.props.fabisOpen}
            >
              <MainButton
                iconResting={<MdAdd style={{ fontSize: 20 }} nativeColor="white" />}
                iconActive={<MdClose style={{ fontSize: 20 }} nativeColor="white" />}
                backgroundColor="red"
                onClick={this.props.fabHandler}
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
                onClick={this.props.newTrueFalseHandler}
              />
              <ChildButton
                icon={<MIcon style={{ fontSize: 20 }} nativeColor="black" />}
                backgroundColor="white"
                size={40}
                onClick={this.props.newMultipleHandler}
              />
            </FloatingMenu>
            </div>
      </Aux>
    );
  }
}

export default QuestionBox;