import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer';
import List from '../List/ListContainer';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';

class Home extends React.Component {
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
        <Container>
          <Creator text={settings.listCreatorText} action={addList} />
        </Container>
        <Search />
        {lists.map((listData) => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default Home;
