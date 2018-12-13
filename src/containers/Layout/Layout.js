import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Sidebox from '../../components/UI/Sidebox/Sidebox';
import Footer from '../../components/UI/Footer/Footer';
import Mainbox from '../../components/UI/Mainbox/Mainbox';

class Layout extends Component {

  state = {

    lessons: ['math', 'history', 'algebra', 'gym', 'grg', 'err', 'dfd', 'ff','mwfewath', 'histfefeory', 'aleerfgebra', 'gfffym'],

    lessonSelected: ' '
  }

  selectLessonHandler = (lesson) => {
    this.setState({lessonSelected: lesson});
  }

  render () {

    return (
      <Aux>
        <Toolbar />
        <main style={{marginTop: '72px', height: '90vh'}}>
        <Sidebox lessons={this.state.lessons} handler={this.selectLessonHandler} selected={this.state.lessonSelected}/>
        <Mainbox />
        </main>
        <Footer />
      </Aux>
    );

  }
}

export default Layout;