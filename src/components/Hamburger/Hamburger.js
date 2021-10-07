import React from 'react';
import styles from './Hamburger.scss';
import List from '../List/ListContainer';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

class Hamburger extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  };

  state = {
    isActive: true,
    // lists: lists || [],
  };

  // addList(title) {
  //   this.setState((state) => ({
  //     lists: [
  //       ...state.lists,
  //       {
  //         key: state.lists.length
  //           ? state.lists[state.lists.length - 1].key + 1
  //           : 0,
  //         title,
  //         description: 'Interesting things I want to check out!',
  //         image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  //       },
  //     ],
  //   }));
  // }

  handleClick = () => {
    const status = this.state.isActive;
    this.setState({
      isActive: !status,
    });
  };

  render() {
    const { title, subtitle, lists } = this.props;

    return (
      <section className={styles.component}>
        <div className={styles.burgerLine} onClick={this.handleClick}>
          <div className={this.state.isActive ? ' ' + styles.isActive : null} />
          <div className={this.state.isActive ? ' ' + styles.isActive : null} />
          <div className={this.state.isActive ? ' ' + styles.isActive : null} />
        </div>
        <div
          className={
            styles.content + (this.state.isActive ? ' ' : ' ' + styles.isActive)
          }
        >
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          {lists.map((listData) => (
            <List key={listData.id} {...listData} />
          ))}
          <Creator
            text={settings.listCreatorText}
            action={(title) => this.addList(title)}
          />
        </div>
      </section>
    );
  }
}

export default Hamburger;
