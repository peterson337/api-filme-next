import React from 'react'
import { FaStar } from 'react-icons/fa';
import Link from 'next/link'

type Props = {
    movie: any;
    showLink: boolean;
    setShowLink: (value: boolean) => void;
}


export const MovieCards = ({movie, showLink} : Props) => {
        const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <div className=''>
        <img src={imageUrl + movie.poster_path}  
           alt={movie.title}  />

         <h2> {movie.title} </h2>

         <p>
                <FaStar/> {movie.vote_average} 
         </p>

         {                       
            showLink &&  <Link href={`/${movie.id}/`}>Detalhes</Link> 
         }
    </div>
  )
}
