'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBox from './SearchBox';
import { TbGridDots } from 'react-icons/tb';
import { RiSettings3Line } from 'react-icons/ri';

export default function SearchHeader() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex items-center justify-between w-full p-6'>
        <Link href={"/"}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            alt="Google Logo"
            width={120}
            height={40}
            priority
            style={{ 'width': 'auto' }}
          />
        </Link>
        <div className='flex items-center justify-center flex-grow'>
          <div className='w-full'><SearchBox searchValue={searchValue} setSearchValue={setSearchValue} /></div>
        </div>
        <div className='hidden sm:flex'>
          <RiSettings3Line className='p-2 text-4xl bg-transparent rounded-full hover:bg-gray-200'/>
          <TbGridDots className='p-2 text-4xl bg-transparent rounded-full hover:bg-gray-200'/>
          <button className='px-4 py-2 font-medium text-white transition-shadow bg-blue-500 rounded-lg hover:brightness-105 hover:shadow-sm'>Sign In</button>
        </div>
      </div>
    </header>
  );
}