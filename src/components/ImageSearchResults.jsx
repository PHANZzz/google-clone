import React from 'react'
import Link from 'next/link'

export default function ImageSearchResults({ results }) {
    return (
        <div className='pb-24 mt-4'>
            <div className='grid grid-cols-1 px-3 space-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {results.items.map((result) => (
                    <div className='mt-8' key={result.link}>
                        <div className='group'>
                            <Link href={result.image.contextLink}>
                                <img
                                    src={result.link}
                                    alt={result.title}
                                    className='object-cover w-full transition-transform duration-300 transform h-60 group-hover:scale-105'
                                    style={{ borderRadius: '8px' }}
                                />
                            </Link>
                            <Link href={result.image.contextLink}><p className="mt-2 text-sm text-gray-600">{result.title}</p></Link>
                            <Link href={result.image.contextLink}><p className="mt-2 text-sm text-blue-500 hover:underline">{result.displayLink}</p></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
