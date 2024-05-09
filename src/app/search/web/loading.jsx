import React from 'react';
import { Suspense } from 'react';
export default function Loading() {
  return (
    <Suspense>
      <div className='flex items-center justify-center h-[60vh]'>
      <div className='text-3xl text-blue-500 font-lg'>Loading...</div>
    </div>
    </Suspense>
    
  );
}
