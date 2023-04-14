import React, { useEffect, useState } from 'react'
import {SearchIcon,BellIcon} from '@heroicons/react/solid'
import Link from 'next/link'
const NavLinks=["Home","TvShow","Movies","New & Popular","My List"]
export default function Header() {
  const [isScrolled,setIsScrolled]=useState(false)
  useEffect(() => {
   const handleScroll=()=>{
    if(window.scrollY > 0){
      setIsScrolled(true)
    }
    else
    {
      setIsScrolled(false)
    }
   }
  
 window.addEventListener("scroll",handleScroll)  
 return ()=> {
  window.removeEventListener('scroll',handleScroll)
 }
  }, [])
  
  return (
    <header className={`${isScrolled&&' bg-black/25 backdrop-blur '} transition  `}>
        <div className='flex items-center space-x-2 md:space-x-10  '>
            <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain max-w-fit md:w-32  "
        />
        <ul className='hidden md:flex space-x-4 '>
          {
            NavLinks.map((item,i)=><li key={i} className='headerLink'>{item}</li>)

            }
          
        </ul>
        </div>
        <div className='flex items-center space-x-4 font-light'>
          <SearchIcon className='hidden h-6 w-6 sm:inline'/>
          <p className='hidden lg:inline'>Kids</p>
          <BellIcon className="w-6 h-6"/>
          <Link href='/account'>
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
          </Link>
        </div>
        
    </header>
  )
}
