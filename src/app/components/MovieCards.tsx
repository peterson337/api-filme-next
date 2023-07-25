import React from 'react'
import { FaStar } from 'react-icons/fa';
import Link from 'next/link'

type Props = {
    movie: any;
    showLink: boolean;
    setShowLink: (value: boolean) => void;
}

type Teste = {
  release_date: string;
  genres: Array<string>;

}


export const MovieCards = ({movie, showLink} : Props, {release_date, genres} : Teste) => {
        const imageUrl = 'https://image.tmdb.org/t/p/w500/';

        
  return (
    <div>
     {  showLink?
      ( <div className=' p-4 bg-[#111] mb-[2.5rem]'>
        <img src={imageUrl + movie.poster_path}  
           alt={movie.title}
           className=' max-w-[100%] mb-[1rem]'
             />

         <h2
            className=' text-[1.5rem] max-w-[1200px] mb-[1rem]'
         > 
         {movie.title}
          </h2>

         <p>
                <span className='flex text-2xl mb-[1rem]'>
                <FaStar className='mr-2 text-[#f7d354] '/> 
                {movie.vote_average}
                </span>
         </p>
                      
             <Link href={`/${movie.id}/`}
                              className='bg-[#f7d354] border-2 border-[#f7d354] rounded-lg
                              text-[#000] p-4 text-[1.3rem] flex
                              justify-center cursor-pointer transition
                              hover:bg-[transparent] hover:text-[#f7d354]'
                          >
                            Detalhes
                          </Link> 
         
    </div>)
    :
    (
      <div
          className=''
      >
         <div className='  mt-[2.5rem] '>

         <h2
            className=' md:text-[2rem] text-[1.5rem] max-w-[1200px] mb-[1rem]'
         > 
         {movie.title}
          </h2>

          <img
            src={imageUrl + movie.poster_path}
            alt={movie.title}
            className="max-w-[100%] mb-[1rem] w-72 md:w-96 ml-auto mr-auto"
          />


 
      

         <p
         className='border-b-2 pt-3'
         >
                <span className='flex text-2xl mb-[1rem] justify-center '>
                <FaStar className='mr-2 text-[#f7d354]'/> 
                {movie.vote_average}
                </span>
         </p>
                      
 
         
    </div>
      </div>
    )
     }
    </div>
  )
}
