'use client'
import React, {useState, useEffect} from 'react'
import {MovieCards} from "../components/MovieCards";
import { useRouter, usePathname  } from 'next/navigation'

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import Image from 'next/image'

type Props = {
  title: string;
  tagline: string;
  budget: number;
  revenue: number;
  runtime: string;
  overview: string;
  release_date: string;
  genres: Array<string>;
  name: string;

}

type genres = {
  name: string;
  id: string;
}

type productionCompanies = {
  name: string;
  id: string;
  logo_path: string;
  origin_country: string;
}

export default function Movie() {
  const [movie, setMovie] = useState<Props | null>(null);
  const [url, setUrl] = useState<string | null>('');
  const [showLink, setShowLink] = useState(false);
  const [genres, setGenres] = useState<genres[]>([]);
  const [productionCompanies, setProductionCompanies] = useState<productionCompanies[]>([]);


  const pathname = usePathname();
    
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${pathname}?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      setMovie(json);
      setGenres(json.genres);
      setProductionCompanies(json.production_companies);
    })
    .catch((error) => {
      console.log(error);
    })      
  }, [])

      const formatCurrency = (number: number) => {
          return number.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          });
      }

    return (
      <div
        className=''
      >
   <div
   className=''
   >
    {movie && (
      <div
       key={movie.title}
   className={!showLink? 'flex flex-col justify-center items-center text-center' : ''}

       >
        
        <MovieCards
                  movie={movie}
                  showLink={showLink}
                  setShowLink={setShowLink}
                  />

                  <div
                  className='border-b-2 pb-3 pt-3'
                  >
                    {
                      productionCompanies.map((productionCompany) => {
                        return(
                          <div
                          key={productionCompany.id}
                          className='mb-5'
                          >
                            <p
                            className='md:text-[1.5rem] text-[20px] '
                            >Nome da empresa: {productionCompany.name}</p>

                        
                            <p
                            className='md:text-[1.5rem] text-[20px]'
                            > País de origin: {productionCompany.origin_country}</p>

                          </div>
                        )
                      })
                    }
                  </div>

                  <div
                  className='flex md:flex-row flex-row 
                            space-x-3 border-b-2 pb-3 pt-3 w-72 text-center md:w-96 mr-7'

                  >
                    <span
                    className='md:text-[1.5rem] text-[18px]'
                    > Genero: </span>
                  {
          genres.map((val) => {
                return(
                  <div
                  key={val.id}
                  >
                      <p
                    className='md:text-[1.5rem] text-[18px]'

                      >
                     <span
                                className=' font-bold'
                              >{val.name}</span>
                      
                      </p>
                  </div>
                )
          })
        }
                  </div>
                 {/*  <p
                  className='mt-3'
                  >{movie.tagline}</p> */}

                  <div
                    className='flex flex-col justify-center 
                               items-center text-center space-y-[1.5rem]'
                  >

                    <div
                    className='flex flex-row justify-center items-center 
                                text-center border-b-2 pb-3 pt-3'
                    >
                    <h3 
                    className='mt-1'

                    >

                    <BsWallet2
                    className='text-[#f7d354] text-[1.5rem]'
                    />   

                    </h3>

                          <p
                                  className='mx-4 text-[1.3rem]'
                                  >Orçamento:</p>


                          <p
                      className='mt-1 text-[1.3rem]'
                      >{formatCurrency(movie.budget)}</p>
                    </div>

                    

                    <div
                    className='flex flex-row justify-center items-center 
                               text-center border-b-2 pb-3'
                    >
                    <h3 
                    className='mt-1'

                    >

                        <BsGraphUp
                    className='text-[#f7d354] text-[1.5rem]'

                        />  

                    </h3>

                          <p
                                  className='mx-4 text-[1.3rem]'
                                  > Receita:
                                  </p>


                          <p
                      className='mt-1 text-[1.3rem]'
                      >{formatCurrency(movie.revenue)}</p>
                    </div>

                    
                    <div
                    className='flex flex-row justify-center 
                               items-center text-center border-b-2 pb-3'
                    >
                    <h3 
                    className='mt-1'

                    >

                    <BsHourglassSplit
                    className='text-[#f7d354] text-[1.5rem]'

                    /> 

                    </h3>

                          <p
                                  className='mx-4 text-[1.3rem]'
                                  >Duração:</p>


                          <p
                      className='mt-1 text-[1.3rem]'
                      >Minutos: {movie.runtime}</p>
                    </div>

                    <div
                    className='flex flex-row justify-center 
                               items-center text-center'
                    >
                    <h3 
                    className='mt-1'

                    >

                      <BsFillFileEarmarkTextFill
                    className='text-[#f7d354] text-[1.5rem]'

                      /> 
                       

                    </h3>

                          <p
                                  className='mx-4 text-[1.3rem]'
                                  >Descrição:
                          </p>

                    </div>



                          <p
                      className='mt-1 text-[1.3rem]  pb-28 md:mx-40 mx-10'
                      >{movie.overview}
                      </p>



                      
                  
                  </div>
      </div>
    )}
    
  </div>
      </div>
    )
  }