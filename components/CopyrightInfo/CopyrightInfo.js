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
          <div><p>Powered by DRIVRZLane</p></div>
          <div><p className={classes.label}>{this.props.label}</p></div>
          <div><a href={this.props.privacyPolicyURL  || "/privacy-policy.html"} rel="noopener noreferrer" target="_blank">Privacy Policy</a></div>
        </div>
        </div>
    );
  }
}


CopyrightInfo.propTypes = {
  label: PropTypes.string,
  privacyPolicyURL: PropTypes.string
};

export default CopyrightInfo;