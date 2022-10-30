import {
  ADD_CARD,
  CARDS_ERROR,
  CARD_DETAILS,
  CLEAR_CURRENT,
  GET_CARDS,
  SET_CURRENT,
  SET_LOADING,
  UPDATE_CARD,
} from '../constants/cardConstant';

export const getCards = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    dispatch({
      type: GET_CARDS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: CARDS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const listCardDetails = id => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    dispatch({
      type: CARD_DETAILS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: CARDS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const addCards = card => async dispatch => {
  try {
    setLoading();
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_CARD,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: CARDS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const updateCard = card => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${card.id}`, {
      method: 'PUT',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_CARD,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: CARDS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//set Current card

export const setCurrent = card => {
  return {
    type: SET_CURRENT,
    payload: card,
  };
};

//clear current card

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
