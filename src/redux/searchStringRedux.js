// selectors
export const getSearchString = (state) => state.searchString;

export const countVisibleCards = (state) =>
  state.cards.filter((card) =>
    new RegExp(state.searchString, 'i').test(card.title)
  ).length;

export const countAllCards = (state) => state.cards.length;

// action name creator
const reducerName = 'searchString';
const createActionName = (name) => `app/${reducerName}/${name}`;

// actions types
export const CHANGE = createActionName('CHANGE');

// action creators
export const createAction_changeSearchString = (payload) => ({
  payload,
  type: CHANGE,
});

// reducer
export default function reducer(state = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return state;
  }
}
