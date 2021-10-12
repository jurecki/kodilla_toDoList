import shortid from 'shortid';

//selectors
export const getCardsForColumn = (state, columnId) =>
  state.cards.filter(
    (card) =>
      card.columnId == columnId &&
      new RegExp(state.searchString, 'i').test(card.title)
  );

//action name creator
const reducerName = 'cards';
const createActionName = (name) => `app/${reducerName}/${name}`;

//action types
export const ADD_CARD = createActionName('ADD_CARD');
export const REMOVE_CARD = createActionName('REMOVE_CARD');

//action creator
export const createActionAddCard = (payload) => ({
  payload: { ...payload, id: shortid.generate() },
  type: ADD_CARD,
});

export const createActionRemoveCard = (id) => ({
  payload: { id },
  type: REMOVE_CARD,
});

//reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    case REMOVE_CARD:
      return state.filter(
        (currentElement) => currentElement.id !== action.payload.id
      );
    default:
      return state;
  }
}
