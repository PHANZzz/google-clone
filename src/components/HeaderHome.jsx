import Link from 'next/link';
import React from 'react';
import { TbGridDots } from "react-icons/tb";

export default function HeaderHome() {
    return (
        <header className='flex justify-end p-5'>
            <div className="flex items-center gap-4">
                <Link href={"https://mail.google.com"} legacyBehavior>
                    <a className=' hover:underline'>Gmail</a>
                </Link>
                <Link href={"https://image.google.com"} legacyBehavior>
                    <a className='hover:underline '>Image</a>
                </Link>
                <TbGridDots className='p-2 text-4xl bg-transparent rounded-full hover:bg-gray-200'/>
                <button className='px-4 py-2 font-medium text-white transition-shadow bg-blue-500 rounded-lg hover:brightness-105 hover:shadow-sm'>Sign In</button>
            </div>
        </header>
    );
}
