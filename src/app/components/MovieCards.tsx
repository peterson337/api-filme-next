import React from 'react'
import { FaStar } from 'react-icons/fa';
import Link from 'next/link'

type Props = {
    movie: any;
    showLink: boolean;
    setShowLink: (value: boolean) => void;
}


export const MovieCards = ({movie, showLink} : Props) => {
  return (
    <div>
        <img src="https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1/fiVW06jE7z9YnO4trhaMEdclSiC.jpg" 
          alt={movie.title} />

         <h2> {movie.title} </h2>

         <p>
                <FaStar/> {movie.vote_average} 
         </p>

         {                       
            showLink &&  <Link href={`/Movie/${movie.id}`}>Detalhes</Link> 
         }
    </div>
  )
}
