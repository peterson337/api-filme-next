'use client'
import React, {useState, useEffect} from 'react'
import {MovieCards} from "../components/MovieCards";
import { useRouter, usePathname  } from 'next/navigation'
import { NextResponse } from 'next/server'

interface Movie {
  title: string;
  // outras propriedades do filme
}

export default function Search() {
      const [movies, setMovies] = useState<Movie[]>([]);
      const [url, seturl] = useState<string | null>('');
      const [showLink, setShowLink] = useState(true);


      useEffect(() => {
        const url = new URL(window.location.href);
        const query = url.searchParams.get('q');
        console.log(query);

        seturl(query);
        
      },)

      useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${url}&api_key=506fadb0256c13349acc05dabebf9604`, {
            method: 'GET',
           })
           .then(response => response.json())
           .then((json) => {
            setMovies(json.results);
           })      
    }, [url])
      
    console.log(movies);
    
    return(
      <div className=' text-[#fff]  m-[2rem] '>
        <h2 className='text-[2.5rem] text-center'
        >Resultados para: <span
                            className='text-[#f7d354]'
                           >
                            {url}
                            </span>
      </h2>

      <div className='flex flex-wrap	justify-between'>
      {
        movies.length === 0 ? (
          <div>Carregando...</div>
        ) : (
          movies.map((movie) => (
            <div key={movie.title} 
              className='flex  flex-wrap
                          justify-between md:w-[30%]	'
            >
                <MovieCards
                  movie={movie}
                  showLink={showLink}
                  setShowLink={setShowLink}
                  />

            </div>
          ))
        )
      }
       </div>
   </div>
    )
  }