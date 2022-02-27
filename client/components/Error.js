import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setError } from '../redux/actions';

const Error = () => {
const dispatch = useDispatch();
  const err = useSelector(state=>state.error);
  const user = useSelector(state=>state.user);
  console.log(user);
  return (
      <>
      <div></div>
      {err&&
    <div className='text-red'>{err}</div>
      }
    </>
  )
}

export default Error