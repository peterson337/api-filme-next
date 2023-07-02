'use client'
import React, {useState, useEffect} from 'react'
import {MovieCards} from "../components/MovieCards";
interface Movie {
    title: string;
    // outras propriedades do filme
  }

export const Index = () => {
    const [topMovies, setTopMovies] = useState<Movie[]>([]);
    const [showLink, setShowLink] = useState(true);


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1', {
            method: 'GET',
           })
           .then(response => response.json())
           .then((json) => {
            setTopMovies(json.results);
           })      
    }, [])

    return (
    //? CONTAINER   
     <div className=' text-[#fff]  m-[2rem '>
       <h2 className='text-[2.5rem]'>Melhores filmes:</h2>

       <div className='flex flex-wrap	 justify-between'>
      {
        topMovies.length === 0 ? (
          <div>Carregando...</div>
        ) : (
          topMovies.map((movie) => (
            <div key={movie.title} 
              className='flex md:w-[30%] m-3 p-[1rem]'
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
