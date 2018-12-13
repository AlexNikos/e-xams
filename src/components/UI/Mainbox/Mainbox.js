import React from 'react';
import Tabs from '../Tabs/Tabs';
import classes from './Mainbox.css';

const mainbox = () => (

  <div className={classes.Mainbox}>

    <Tabs>
      <div label="Questions">
        <div>Questions Tab</div>
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
  </div>

);

export default mainbox;