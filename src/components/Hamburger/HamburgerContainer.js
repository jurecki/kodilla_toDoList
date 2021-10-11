import { connect } from 'react-redux';
import { createActionAddList } from '../../redux/listsRedux';
import Hamburger from './Hamburger';

const mapStateToProps = (state) => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

const mapsDispatchToProps = (dispatch) => {
  return {
    addList: (title) =>
      dispatch(
        createActionAddList({
          title,
          description: 'Interesting things I want to check out!',
          image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
        })
      ),
  };
};

export default connect(mapStateToProps, mapsDispatchToProps)(Hamburger);
