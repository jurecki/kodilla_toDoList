import React from 'react';
import styles from './Burger.scss';
import PropTypes from 'prop-types';

const Burger = ({ variant = '' }) => (
  <div className={styles.burgerLine}>
    <div className={variant} />
    <div className={variant} />
    <div className={variant} />
  </div>
);

Burger.propTypes = {
  variant: PropTypes.node,
};

export default Burger;
