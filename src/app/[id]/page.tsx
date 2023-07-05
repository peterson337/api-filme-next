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

}
import { NextResponse } from 'next/server'


export default function Movie(request: Request) {
  const [movies, setMovies] = useState<null | Props[]>(null);
  const [url, seturl] = useState<string | null>('');

useEffect(() => {
  const teste = async () => {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    seturl(id);
    const res = await fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1`)
    const product = await res.json()
   
    setMovies(product)
  }
      teste();
}, [])


    
/*   useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/39108?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1`, {
        method: 'GET',
       })
       .then(response => response.json())
       .then((json) => {
        setMovies(json);
       })      
}, []) */

    return (
      <div>
       <p>Paranetro:{url}</p>
      </div>
    )
  }