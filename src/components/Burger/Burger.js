import React from 'react';
import styles from './Burger.scss';
import List from '../List/List';
import { pageContents, listData } from '../../data/dataStore';

class Burger extends React.Component {
  state = {
    active: false,
  };

  handleClick = () => {
    const currentState = this.state.active;
    this.setState({
      active: !currentState,
    });
    console.log(this.state.active);
    console.log('click');
  };

  render() {
    return (
      <>
        <div className={styles.component} onClick={this.handleClick}>
          <div className={styles.element} />
          <div className={styles.element} />
          <div className={styles.element} />
        </div>
        <div className={this.state.active ? styles.buttonsShown : null}>
          <h1 className={styles.title}>{pageContents.title}</h1>
          <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
          <List {...listData} />
        </div>
      </>
    );
  }
}

export default Burger;
