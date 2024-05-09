'use client'
import { useEffect } from 'react'
import React from 'react'

export default function error({error,reset}) {
    useEffect(() =>{
   console.log('error',error);
    },[error]);
    
  return (
    <div className='flex flex-col items-center justify-center pt-10'>
        <h1 className='mb-4 text-3xl'>Something went wrong</h1>
        <button className='text-blue-500'>Try again</button>
    </div>
  )
}
