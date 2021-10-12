import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/CardContainer';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

const Column = ({ title, icon, cards, addCard }) => (
  <section className={styles.component}>
    <h3 className={styles.title}>
      {title}{' '}
      <span className={styles.icon}>
        <Icon name={icon} />
      </span>
    </h3>
    {cards.map((cardData) => (
      <Card key={cardData.id} {...cardData} />
    ))}
    <Creator text={settings.cardCreatorText} action={addCard} />
  </section>
);

Column.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  cards: PropTypes.array,
  id: PropTypes.node,
  addCard: PropTypes.func,
};

export default Column;
