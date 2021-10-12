import { connect } from 'react-redux';
import Card from './Card';
import { createActionRemoveCard } from '../../redux/cardsRedux';

const mapDispatchToProps = (dispatch) => ({
  removeCard: (id) => dispatch(createActionRemoveCard(id)),
});

export default connect(mapDispatchToProps)(Card);
