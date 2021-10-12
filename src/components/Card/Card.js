import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    id: PropTypes.node,
    removeCard: PropTypes.func,
  };

  handleRemoveCard = () => {
    console.log('remove', this);
    this.props.removeCard;
  };

  render() {
    const { title } = this.props;
    return (
      <section className={styles.component}>
        <div>{title}</div>
        <div>
          <Icon name={settings.icons.remove} onClick={this.handleRemoveCard} />
        </div>
      </section>
    );
  }
}

export default Card;
