import { connect } from 'react-redux';
import List from './List';

export const getColumnsForList = (state, listId) =>
  state.columns.filter((column) => column.listId === listId);

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

export default connect(mapStateToProps)(List);
