import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = ({ title }) => (
  <section className={styles.component}>
    <div>{title}</div>
  </section>
);

Card.propTypes = {
  title: PropTypes.node,
};

export default Card;
