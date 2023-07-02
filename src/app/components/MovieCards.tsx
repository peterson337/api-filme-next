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
    <div className=' p-4 bg-[#111] mb-[2.5rem]'>
        <img src={imageUrl + movie.poster_path}  
           alt={movie.title}
           className=''
             />

         <h2
            className='md:w-96 text-[2.5rem] max-w-[1200px]'
         > 
         {movie.title}
          </h2>

         <p>
                <span className='flex text-2xl'><FaStar className='mr-2'/> {movie.vote_average}</span>
         </p>

         {                       
            showLink &&  <Link href={`/${movie.id}/`}
                              className='text-[#f7d354] text-2xl hover:text-[#b8930c]'
                          >
                            Detalhes
                            </Link> 
         }
    </div>
  )
}
