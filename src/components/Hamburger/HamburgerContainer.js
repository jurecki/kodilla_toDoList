import { connect } from 'react-redux';
import Hamburger from './Hamburger';

const mapStateToProps = (state) => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

export default connect(mapStateToProps)(Hamburger);
