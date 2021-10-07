import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import { pageContents, listData } from '../../data/dataStore';
import Burger from '../Burger/Burger';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <Burger />
      </main>
    );
  }
}

export default App;
