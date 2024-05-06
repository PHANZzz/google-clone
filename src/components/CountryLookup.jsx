"use client"

import React, { useState, useEffect } from 'react';

export default function CountryLookup() {
  const [country, setCountry] = useState('United States');

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`);
        const data = await response.json();
        if (data && data.country) {
          setCountry(data.country);
        }
      } catch (error) {
        console.error('Error fetching country:', error);
      }
    };

    getCountry();
  }, []); 

  return (
    <div>{country}</div>
  );
}
