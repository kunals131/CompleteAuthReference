import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';



const Index = () => {
  const [view,setView] = useState('login');
  const router = useRouter();
  const user = useSelector((state)=>state.user);


  useEffect(()=>{
    if (!user) {
      router.push('/auth');
    }
  }, [user])
  return (
    <div className='text-2xl'>Hello</div>
  )
}

export default Index