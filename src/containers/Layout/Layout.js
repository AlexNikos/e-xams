import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Sidebox from '../../components/UI/Sidebox/Sidebox';
import Footer from '../../components/UI/Footer/Footer';
import Mainbox from '../../containers/Mainbox/Mainbox';
import CreateCourse from '../../components/UI/CreateCourse/CreateCourse';

class Layout extends Component {

  state = {
    lessons: ['math', 'history', 'algebra', 'gym', 'grg', 'err', 'dfd', 'ff', 'mwfewath', 'histfefeory', 'aleerfgebra', 'gfffym'],
    lessonSelected: ' ',
    addCourse: false,
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

  selectLessonHandler = (lesson) => {
    this.setState({ lessonSelected: lesson });
  }

  addCourseHandler = () => {
    this.setState((prevState) => {
      return ({ addCourse: !prevState.addCourse, fabisOpen: false, newMultiple: false });
    });
  }


  render() {

    return (
      <Aux>
        <Toolbar />
        <div style={{ marginTop: '72px', height: '90vh' }}>

          <Sidebox lessons={this.state.lessons} handler={this.selectLessonHandler} selected={this.state.lessonSelected} addCourse={this.addCourseHandler} />

          <Mainbox
            questions={this.state.questionList} />

          {this.state.addCourse ? <CreateCourse cancelButton={this.addCourseHandler} /> : null}
        </div>
        <Footer />
      </Aux>
    );

  }
}

export default Layout;