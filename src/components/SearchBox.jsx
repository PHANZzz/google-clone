'use client'

import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiCloseCircleLine } from 'react-icons/ri';
import { BsFillMicFill } from 'react-icons/bs';
import {  useSearchParams,useRouter } from 'next/navigation';
export default function SearchBox() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/web?searchTerm=${term}`);
  };

  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const [term, setTerm] = useState(searchTerm || '');

  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center flex-grow-0 max-w-3xl px-6 py-3 ml-10 mr-5 bg-white border border-gray-300 rounded-full shadow-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50'
    >
      <AiOutlineSearch className='mr-2 text-xl font-semibold text-gray-500' />
      <input
        type="text"
        placeholder="Search Google"
        className='flex-grow w-full h-full text-sm bg-transparent outline-none '
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {term && (
        <RiCloseCircleLine
          className='ml-2 text-xl text-gray-400 cursor-pointer'
          onClick={() => setTerm('')}
        />
      )}
      <BsFillMicFill className='ml-2 text-xl font-semibold text-blue-500 cursor-pointer' />
    </form>
  );
}