import React, { PropTypes } from 'react';
import classes from './ModalTemplates.scss';
import checkImage from './error.png';

export const Error = ({
  header,
  message,
  children,
  hasLogo = true
}) => (
  <div className={classes.SuccessModal}>
    <div className={classes.SuccessModalHeader}>
      {hasLogo && <img src={checkImage} className={classes.checkImage} /> }
      <h1>{header}</h1>
    </div>

    <div className={classes.SuccessModalMessage}>
      <p>{message}</p>
    </div>

    <div className={classes.SuccessModalButtons}>
      {children}
    </div>
  </div>
);

Error.propTypes = {
  header: PropTypes.string,
  message: PropTypes.string,
  children: PropTypes.node,
  hasLogo: PropTypes.bool
};

export default Error;
