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

type Props = {
  title: string;
}

export default function Movie() {
  const [movie, setMovie] = useState<Props | null>(null);
  const [url, setUrl] = useState<string | null>('');

  const pathname = usePathname();
    
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${pathname}?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      setMovie(json);
      console.log(json);
    })
    .catch((error) => {
      console.log(error);
    })      
  }, [])

    return (
      <div>
   <div>
    {movie && (
      <div key={movie.title}>
        <p>{movie.title}</p>
      </div>
    )}
  </div>
      </div>
    )
  }