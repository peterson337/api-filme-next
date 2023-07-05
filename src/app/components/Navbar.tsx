'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { BsFillCameraVideoFill, BsSearch} from 'react-icons/bs'
import { useRouter } from 'next/navigation'


export const Navbar = () => {
      const [search, setSearch] = useState('');
      const router = useRouter()

      const handleSubmit = (e : any) => {
        e.preventDefault();

        if (!search) return;

        router.push(`/Search?q=${search}`);
        setSearch('');
      }

  return (
    <div className=' text-white'>
          <div className='flex justify-between 
                          align-center bg-[#121212]
                          p-[1rem] border-b-2'>
        
            
            <div
            className=' text-[#f7d354] hover:text-[#b8930c] text-2xl'
            >
            <Link href={'/'}>

            <span className=' flex flex-row'>
            <BsFillCameraVideoFill className='mt-1'/> 
            <p className='flex ml-2 justify-center gap-[0.5rem]'>Movies lib</p>
            </span>

            </Link>
            </div>

                <div >
                    <form 
                    onSubmit={handleSubmit}
                    className='flex flex-row gap-[0.5rem]'

                    >
                    <input type="text"
                     className=' w-32 p-[0.2rem] rounded-full border-none
                                 text-black' 
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                     />   

                    <button
                    type='submit'
                    className='bg-[#f7d354] border-2 border-[#f7d354] rounded-full
                                 text-[#000] p-[0.3rem] text-[1.3rem] flex
                                 justify-center cursor-pointer transition
                                 hover:bg-[transparent] hover:text-[#f7d354]'
                    >
                            <BsSearch/>

                   </button>
            {/* <Link href={'Search'}>Ir para a página search</Link> */}
                    </form>
                </div>

        </div>
    </div>
  )
}
