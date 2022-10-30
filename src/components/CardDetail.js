import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { listCardDetails } from '../actions/cardActions';

const CardDetail = ({ match }) => {
  const dispatch = useDispatch();

  const cardDetails = useSelector(state => state.cardList);
  const { card, loading } = cardDetails;

  useEffect(() => {
    dispatch(listCardDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link to='/' className='button__click'>
        Back
      </Link>

      {loading ? (
        <Loader />
      ) : (
        card && (
          <div className='card-tops'>
            <img className='round-img' src={card.image} alt='' />
            <h1 className='large'>{card.name}</h1>
            <p>{card.email}</p>
            <p>{card.username}</p>
            <p>{card.phone}</p>
            <div>
              {
                <a
                href={`http://${card.website}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {card.website}
                </a>
              }
            </div>
          </div>
        )
      )}
    </>
  );
};

export default CardDetail;
