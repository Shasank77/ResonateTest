import {
  ADD_CARD,
  CARDS_ERROR,
  CLEAR_CURRENT,
  GET_CARDS,
  SET_CURRENT,
  SET_LOADING,
  UPDATE_CARD,
  CARD_DETAILS,
} from '../constants/cardConstant';

const initialState = {
  cards: null,
  current: null,
  card: null,
  loading: true,
  error: null,
};

export const cardListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        cards: action.payload,
        loading: false,
      };
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
        loading: false,
      };

    case UPDATE_CARD:
      return {
        ...state,
        cards: state.cards.map(card =>
          card.id === action.payload.id ? action.payload : card
        ),
      };
    case CARD_DETAILS:
      return {
        ...state,
        card: action.payload,
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CARDS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
