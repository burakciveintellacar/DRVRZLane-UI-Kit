import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classes from './CopyrightInfo.scss';
import poweredByDrivrz from './powered-by-drivrz-text.png';


class CopyrightInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={classes.copyrightInfo}>
          <div><img src={poweredByDrivrz} className={classes.poweredBy} /></div>
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