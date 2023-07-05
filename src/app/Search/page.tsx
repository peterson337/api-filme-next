'use client'
import React, {useState, useEffect} from 'react'
import {MovieCards} from "../components/MovieCards";
import { useRouter } from 'next/navigation'

type Props = {
  search: string
}

export default function Search({ search }:Props) {
      const [movies, setMovies] = useState([]);
      const router = useRouter()


    return(
      <div className=' text-[#fff]  m-[2rem] '>
      <h2 className='text-[2.5rem] text-center'>Resultados para:  {search}
      </h2>

      <div className='flex flex-wrap	justify-between'>
     {
       movies.length === 0 ? (
         <div>Carregando...</div>
       ) : (
         movies.map((movie, index) => (
           <div key={index} 
             className='flex  flex-wrap
                         justify-between md:w-[30%]	'
           >
            
           </div>
         ))
       )
     }
      </div>
   </div>
    )
  }