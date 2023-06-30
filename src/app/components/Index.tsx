'use client'
import React, {useState, useEffect} from 'react'
import {MovieCards} from "../components/MovieCards";
interface Movie {
    title: string;
    // outras propriedades do filme
  }

export const Index = () => {
    const [topMovies, setTopMovies] = useState<Movie[]>([]);
    const [showLink, setShowLink] = useState(false);


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
     <div>
       <h2>Melhores filmes:</h2>

       <div>
      {
        topMovies.length === 0 ? (
          <div>Carregando...</div>
        ) : (
          topMovies.map((movie) => (
            <div key={movie.title}>
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
