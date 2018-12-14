import React from 'react';
import Tabs from '../Tabs/Tabs';
import classes from './Mainbox.css';
import MultipleChoice from '../Questions/MultipleChoice/MultipleChoice';
import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';
// import Close from '../../../assets/images/close.png';
// import Add from '../../../assets/images/add.png';

import MdAdd from '@material-ui/icons/Add';
import MdClose from '@material-ui/icons/Clear';
import MIcon from '@material-ui/icons/Reorder';
import TIcon from '@material-ui/icons/DragHandle';
import SIcon from '@material-ui/icons/Remove';


const mainbox = (props) => (

  <div className={classes.Mainbox}>

    <Tabs>
      <div label="Questions" >
        <div className={classes.Grid}>
          {props.questions.map((question) => {
            return (
              <MultipleChoice key={Math.random()} question={question} />
            )
          })}
        </div>
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

    <div style={{ display: 'ruby-text-container' }}>
      <FloatingMenu
        slideSpeed={500}
        direction="up"
        spacing={8}
        isOpen={props.fabisOpen}
      >
        <MainButton
          iconResting={<MdAdd style={{ fontSize: 20 }} nativeColor="white" />}
          iconActive={<MdClose style={{ fontSize: 20 }} nativeColor="white" />}
          backgroundColor="red"
          onClick={props.fabHandler}
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
        />
        <ChildButton
          icon={<MIcon style={{ fontSize: 20 }} nativeColor="black" />}
          backgroundColor="white"
          size={40}
        />
      </FloatingMenu>
    </div>
  </div>

);

export default mainbox;