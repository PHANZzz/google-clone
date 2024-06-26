import React from 'react';
import Link from 'next/link';
import WebSearchResults from '@/components/WebSearchResults';

export default async function WebSearchPage({ searchParams }) {
  const startIndex = searchParams.start|| '1';
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`);
  if (!response.ok) throw new Error('Something went wrong');
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className='flex flex-col items-center justify-center pt-10'>
        <h1 className='mb-4 text-3xl'>No results found for {searchParams.searchTerm}</h1>
        <p className='text-lg'>
          Try searching the web or images for something else{' '}
          <Link href='/' legacyBehavior>
            <a className='text-blue-500'>Home</a>
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
     {results&&<WebSearchResults results={data}/>}
    </div>
  );
}
