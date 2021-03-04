import PropTypes from 'prop-types';
import React from 'react';

import classes from './TradeInInformation.scss';

const TradeInInformation = function (props) {
  return (
    <div className={classes.wrapper}>
      <div className={`${classes.flex__row} ${classes.flex__row}`}>
        <div className={`${classes.flex__row__item} ${classes.flex__row__item} ${classes.offer}`}>

          <div className={`${classes.flex__row} ${classes.carSummary}`}>
            <div className={`${classes.flex__row__item} ${classes.manufacturerLogoWrapper}`}>
              <img src={props.manufacturerLogo} />
            </div>

            <div className={`${classes.flex__row__item} ${classes.carDetails}`}>
              <div className={classes.name}>{props.name}</div>
              <div className={classes.color} />
              <div className={classes.vin}><a onClick={props.onEditClick}>Click to Edit</a> <a className={classes.pipeLine}> | </a> <a onClick={props.onRemoveClick}>Click to Remove </a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TradeInInformation.propTypes = {
  headerText: PropTypes.string,
  manufacturerLogo: PropTypes.string,
  name: PropTypes.string,
  carCondition: PropTypes.string,
  code: PropTypes.string,
  msrp: PropTypes.string,
  tradeInOffer: PropTypes.string,
  downPayment: PropTypes.string,
  monthlyPayment: PropTypes.string,
  leaseTerm: PropTypes.string,
  apr: PropTypes.string,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
  offersAndIncentives: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  })),
  warrantiesAndAddons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })),
  extendedWarranty: PropTypes.string,
  gapInsurance: PropTypes.string,
  total: PropTypes.string
};

export default TradeInInformation;