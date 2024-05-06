'use client';

import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
import { useRouter } from 'next/navigation';
export default function HomeSearch() {
    const [input,setInput] = useState('');
    const router=useRouter();
    const [random,setRandom] = useState(false);
    
const handleSubmit =(e)=>{
  e.preventDefault();
  if(!input.trim()) return;
  router.push(`/search/web/?searchTerm=${input}`);
}
const  randomSearch=async (e)=>{
  setRandom(true);
  const response = await fetch('https://random-word-api.herokuapp.com/word')
  .then((res) => res.json())
  .then((data) =>data[0]);
  if(!response)return;
  router.push(`/search/web?searchTerm=${response}`);
  setRandom(false)
  
}
  return (
    <>
    <form 
    onSubmit={handleSubmit}
    className='flex w-full mx-auto mt-5 max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'>
      <AiOutlineSearch className='mr-3 text-xl text-gray-500'/>
      <input type="text" className='flex-grow focus:outline-none' onChange={(e)=>setInput(e.target.value)} />
      <BsFillMicFill className='text-lg' />
    </form>
    <div className='flex flex-col justify-center mt-8 space-y-2 sm:-space-y-0 sm:flex-row sm:space-x-4'>
    <button className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-300 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow' 
    onClick={handleSubmit}>Google Search</button>
    <button disabled={random} className='bg-[#f8f9fa] disabled:shadow-sm disabled:opacity-80 rounded-md text-sm text-gray-800 hover:ring-gray-300 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'
    onClick={randomSearch}
    >{random?'Loading... ':'I am Feeling Lucky'}</button>
    </div>
    
    </>
  )
}
