import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  };
  static propTypes = {
    title: PropTypes.string,
  };

  addCard(title) {
    this.setState((state) => ({
      cards: [
        ...state.cards,
        {
          key: state.cards.length
            ? state.cards[state.cards.length - 1].key + 1
            : 0,
          title,
        },
      ],
    }));
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {this.props.title}{' '}
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
        </h3>
        {this.state.cards.map((card) => (
          <Card key={card.key} title={card.title} />
        ))}
        <Creator
          text={settings.cardCreatorText}
          action={(title) => this.addCard(title)}
        />
      </section>
    );
  }
}

export default Column;
