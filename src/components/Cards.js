import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardItem from './CardItem';
import { getCards } from '../actions/cardActions';
import Loader from './Loader';

const Cards = ({ history, match }) => {
  const dispatch = useDispatch();

  const cardList = useSelector(state => state.cardList);

  const { cards, loading } = cardList;

 

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return (
    <div className='content-container'>
      {loading ? (
        <Loader />
      ) : (
        <div className='cards'>
          {cards && cards.map(data => <CardItem data={data} key={data.id} />)}
        </div>
      )}
    </div>
  );
};

export default Cards;
