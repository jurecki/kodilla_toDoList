import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.node,
    cards: PropTypes.array,
    id: PropTypes.node,
    addCard: PropTypes.func,
  };

  render() {
    const { cards, title, icon, addCard } = this.props;
    return (
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
  }
}

export default Column;
