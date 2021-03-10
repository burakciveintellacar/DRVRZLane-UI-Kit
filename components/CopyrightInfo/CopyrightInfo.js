import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classes from './CopyrightInfo.scss';

class CopyrightInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={classes.copyrightInfo}>
          <div><p className={classes.label}>{this.props.label}</p></div>
          <div><a href="" rel="noopener noreferrer" target="_blank">Terms</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="" rel="noopener noreferrer" target="_blank">Privacy</a></div>
        </div>
        </div>
    );
  }
}


CopyrightInfo.propTypes = {
  label: PropTypes.string
};

export default CopyrightInfo;