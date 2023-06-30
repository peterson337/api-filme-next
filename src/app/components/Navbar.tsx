import React from 'react'
import Link from 'next/link'
import { BsFillCameraVideoFill, BsSearch} from 'react-icons/bs'


export const Navbar = () => {
  return (
    <div className=' text-white'>
          <div>
        
            
            <div
            className=' text-[#f7d354] hover:text-[#b8930c] text-2xl'
            >
            <Link href={'/'}>

            <span className=' flex flex-row'>
            <BsFillCameraVideoFill className='mt-1'/> 
            <p className='ml-2'>Movies lib</p>
            </span>

            </Link>
            </div>

                <div >
                    <form className='flex flex-row'>
                    <input type="text" />   

                    <button
                    type='submit'
                    >

                   </button>
            {/* <Link href={'Search'}>Ir para a página search</Link> */}
                        <BsSearch/>
                    </form>
                </div>

        </div>
    </div>
  )
}
