import React from 'react';
import styles from './App.scss';
import Hamburger from '../Hamburger/HamburgerContainer';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <Hamburger />
      </main>
    );
  }
}

export default App;
