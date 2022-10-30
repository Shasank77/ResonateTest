import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCard } from '../actions/cardActions';

const EditCard = ({ match, history }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');

  const cardList = useSelector(state => state.cardList);
  const { current } = cardList;

  useEffect(() => {
    if (current) {
      setName(current.name);
      setEmail(current.email);
      setImage(current.image);
      setAddress(current.address);
      setPhone(current.phone);
      setWebsite(current.website);
    }
  }, [current]);

  const submitHandler = e => {
    e.preventDefault();
    if (name === '' || email === '') {
      alert('Please enter the name and email');
    } else {
      const updCard = {
        id: current.id,
        name,
        email,
        image,
        address,
        phone,
        website,
      };

      dispatch(updateCard(updCard));
      alert('updated');
      history.push('/');
    }
  };

  return (
    <div>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>Update Social Card </h1>
        </div>
      </div>
      <div className='content-container'>
        <form className='form' onSubmit={submitHandler}>
          <input
            type='text'
            className='text-input'
            placeholder='Enter name'
            value={name || ''}
            onChange={e => setName(e.target.value)}
          ></input>

          <input
            type='text'
            className='text-input'
            placeholder='Enter User Email'
            value={email || ''}
            onChange={e => setEmail(e.target.value)}
          ></input>

          <input
            type='text'
            className='text-input'
            placeholder='Enter Url of the Image'
            value={image || ''}
            onChange={e => setImage(e.target.value)}
          ></input>

          <input
            type='text'
            className='text-input'
            placeholder='Enter Full Address'
            value={address || ''}
            onChange={e => setAddress(e.target.value)}
          ></input>

          <input
            type='text'
            className='text-input'
            placeholder='Enter Phone Number'
            value={phone || ''}
            onChange={e => setPhone(e.target.value)}
          ></input>

          <input
            type='text'
            className='text-input'
            placeholder='Enter the website'
            value={website || ''}
            onChange={e => setWebsite(e.target.value)}
          ></input>
          <button className='button__create' type='submit' variant='primary'>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCard;
