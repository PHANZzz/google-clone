'use client'
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function PaginationButtons() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const startIndex = parseInt(searchParams.get('start')) || 1;

  return (
    <div className='flex justify-between px-10 pb-4 text-blue-500 sm:justify-start sm:space-x-44 sm:px-0'>
      {startIndex >= 10 && (
        <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
          <div className='flex flex-col items-center hover:underline'>
            <BsChevronLeft className='h-5' />
            <p>Previous</p>
          </div>
        </Link>
      )}

      {startIndex <= 90 && (
        <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
          <div className='flex flex-col items-center hover:underline'>
            <BsChevronRight className='h-5' />
            <p>Next Page</p>
          </div>
        </Link>
      )}
    </div>
  )
}
