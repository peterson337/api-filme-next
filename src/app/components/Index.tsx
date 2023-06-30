'use client'
import React, {useState, useEffect} from 'react'

interface Movie {
    title: string;
    // outras propriedades do filme
  }

export const Index = () => {
    const [topMovies, setTopMovies] = useState<Movie[]>([]);


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
    <div>
        {
            topMovies.map((val : any) => {
                return(
                    <div key={val.title}>
                        <p>{val.title}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
