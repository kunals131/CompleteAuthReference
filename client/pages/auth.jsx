import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { checkUserAuth, loginUser, setError } from '../redux/actions';

const Auth = () => {
  const [view,setView] = useState('login');
  const user = useSelector(state=>state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  console.log(user);  

  useEffect(()=>{
      dispatch(checkUserAuth());
  }, [])
 
  const [form,setForm] = useState({
      username : '',
      password : ''
  })
  const handleSignIn = ()=>{
      console.log(form);
      dispatch(loginUser(form.username,form.password));
  }
  const handleSignUp =()=>{
    console.log(form);
    console.log('register')
  }
  const handleChange = (e)=>{
      setForm({
          ...form, [e.target.name] : e.target.value
      })
  }
  return (
    <div className='bg-slate-500 h-[100vh] w-[100vw] flex justify-center items-center'>
      <div className='bg-white h-auto w-[30%] p-10'>
          <h1 className='text-center text-3xl font-bold'>{view==='login'?'LOGIN':'REGISTER'}</h1>
          <div className='mt-3'>
              <div className='flex flex-col'>
                  <label htmlFor="userName">Username</label>
                  <input value={form.username} onChange={handleChange} name='username' className='border-2  mt-1 h-[45px] border-gray-300' type="text" id='username' placeholder='UserName' />
              </div>
              <div className='flex flex-col mt-4'>
                  <label htmlFor="userName">Password</label>
                  <input value={form.password} onChange={handleChange} name='password' className='border-2  mt-1 h-[45px] border-gray-300' type="text" id='password' placeholder='password' />
              </div>
              <div className=' cursor-pointer text-center mt-3 px-1  py-3 bg-black text-white' onClick={
                  view==='login'?handleSignIn:handleSignUp
              }>{view.toUpperCase()}</div>
          </div>
          <div className='text-center cursor-pointer text-blue-900 mt-5' onClick={()=>{
              setView((prev)=>(
                  prev==='login'?'register':'login'
              ))
          }}>Change view</div>
      </div>
  
      
    </div>
  )
}

export default Auth