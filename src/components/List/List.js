import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';
import Burger from '../Burger/Burger';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    source: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.node,
    addColumn: PropTypes.func,
  };

  state = {
    isActive: true,
  };

  handleClick = () => {
    const status = this.state.isActive;
    this.setState({
      isActive: !status,
    });
    console.log('click');
  };

  render() {
    const { description, columns, addColumn, title, image } = this.props;
    return (
      <section className={styles.component}>
        <Burger
          variant={this.state.isActive ? ' ' + styles.isActive : null}
          onClick={this.handleClick}
        />
        {/* <div className={styles.burgerLine} onClick={this.handleClick}>
          <div className={this.state.isActive ? ' ' + styles.isActive : null} />
          <div className={this.state.isActive ? ' ' + styles.isActive : null} />
          <div className={this.state.isActive ? ' ' + styles.isActive : null} />
        </div> */}
        <div
          className={
            styles.content + (this.state.isActive ? ' ' : ' ' + styles.isActive)
          }
        >
          <Hero titleText={title} sourceImage={image} />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <div className={styles.columns}>
            {columns.map((columnData) => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn} />
          </div>
        </div>
      </section>
    );
  }
}

export default List;
