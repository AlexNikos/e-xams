import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from '../Tabs.css'

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    //let className = 'tab-list-item';
    let className = [classes.TabListItem];

    if (activeTab === label) {
      //className += ' tab-list-active';
      className.push(classes.TabListActive);
    }

    return (
      <li
        className={className.join(' ')}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}

export default Tab;