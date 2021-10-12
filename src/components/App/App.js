import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer';
import List from '../List/ListContainer';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
  };

  render() {
    const { title, subtitle, lists, addList } = this.props;

    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Creator text={settings.listCreatorText} action={addList} />
        <Search />

        {lists.map((listData) => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default App;
