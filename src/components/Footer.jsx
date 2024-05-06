import React from 'react';
import CountryLookup from './CountryLookup';

export default function Footer() {
    return (
        <footer className='text-sm text-gray-500 absolute bottom-0 bg-[#f2f2f2] w-full'>
            <div className='px-8 py-3 border-b'><CountryLookup /></div>
            <div className='flex flex-col justify-between px-8 py-3 sm:flex-row space-y-7 sm:space-y-0'>
                <ul className='flex items-center space-x-6'>
                    <li className='cursor-pointer hover:underline'>About</li>
                    <li className='cursor-pointer hover:underline'>Advertising</li>
                    <li className='cursor-pointer hover:underline'>Business</li>
                    <li className='cursor-pointer hover:underline'>How Search Works</li>
                </ul>
                <ul className='flex items-center space-x-6'>
                    <li className='cursor-pointer hover:underline'>Privacy</li>
                    <li className='cursor-pointer hover:underline'>Terms</li>
                    <li className='cursor-pointer hover:underline'>Settings</li>
                </ul>
            </div>
        </footer>
    )
}
