import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = ({ titleText, sourceImage }) => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(titleText)}</h2>
    <img className={styles.image} src={sourceImage} />
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  sourceImage: PropTypes.string,
};

export default Hero;
