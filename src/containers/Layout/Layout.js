import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Sidebox from '../../components/UI/Sidebox/Sidebox';
import Footer from '../../components/UI/Footer/Footer';
import Mainbox from '../../components/UI/Mainbox/Mainbox';
import CreateCourse from '../../components/UI/CreateCourse/CreateCourse';

class Layout extends Component {

  state = {

    lessons: ['math', 'history', 'algebra', 'gym', 'grg', 'err', 'dfd', 'ff', 'mwfewath', 'histfefeory', 'aleerfgebra', 'gfffym'],
    lessonSelected: ' ',
    addCourse: false,
    fabisOpen: false,
    questionList: [
      {
        question: 'Question1',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionB'
      },
      {
        question: 'Question2',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionA'
      },
      {
        question: 'Question3',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionD'
      },
      {
        question: 'Question4',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionB'
      },
      {
        question: 'Question5',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionA'
      },
      {
        question: 'Question6',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionD'
      },{
        question: 'Question7',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionB'
      },
      {
        question: 'Question8',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionA'
      },
      {
        question: 'Question9',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionD'
      },
      {
        question: 'Question10',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionB'
      },
      {
        question: 'Question11',
        optionA: 'OptionA',
        optionB: 'OptionB',
        optionC: 'OptionC',
        optionD: 'OptionD',
        answer: 'OptionA'
      },
      {
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
      return ({ addCourse: !prevState.addCourse });
    });
  }

  fabHandler = () => {
    this.setState((prevState) => {
      return ({ fabisOpen: !prevState.fabisOpen });
    });
  }
  render() {

    return (
      <Aux>
        <Toolbar />
        <div style={{ marginTop: '72px', height: '90vh' }}>
          <Sidebox lessons={this.state.lessons} handler={this.selectLessonHandler} selected={this.state.lessonSelected} addCourse={this.addCourseHandler} />
          {this.state.addCourse ? < CreateCourse cancelButton={this.addCourseHandler} /> : null}
          <Mainbox
            questions={this.state.questionList}
            fabisOpen={this.state.fabisOpen}
            fabHandler={this.fabHandler} />
        </div>
        <Footer />
      </Aux>
    );

  }
}

export default Layout;