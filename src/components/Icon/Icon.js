import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.scss';

const Icon = ({ name, ...otherProps }) => (
  <i {...otherProps} className={`fas fa-${name} + ${styles.component}`}></i>
);

Icon.propTypes = {
  name: PropTypes.node,
};
export default Icon;
