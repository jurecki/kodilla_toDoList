import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';
import Button from '../Button/Button';

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
    listIsActive: false,
  };

  handleShowList = () => {
    this.setState((prevState) => ({
      listIsActive: !prevState.listIsActive,
    }));
  };

  render() {
    const { description, columns, addColumn, title, image } = this.props;
    return (
      <section className={styles.component}>
        <Button
          onClick={this.handleShowList}
          variant={this.state.listIsActive ? 'danger' : ''}
        >
          {this.state.listIsActive ? `Hide List` : `Show List ${title}`}
        </Button>

        {this.state.listIsActive ? (
          <>
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
          </>
        ) : null}
      </section>
    );
  }
}

export default List;
