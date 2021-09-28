import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = (props) => (
  <section className={styles.component}>
    <div>{props.title}</div>
  </section>
);

Card.porpTypes = {
  title: PropTypes.node,
};

export default Card;
