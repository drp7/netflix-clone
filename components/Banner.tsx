import Image from 'next/image'
import React, { useState,useEffect } from 'react'
import { Movie } from '../typing'
import { baseUrl } from '../constants/movie'
import {FaPlay} from "react-icons/fa"
import { InformationCircleIcon } from '@heroicons/react/solid'

interface Props{
  netflixOriginals:Movie[]
}

export default function Banner({netflixOriginals}:Props) {
    const random=Math.floor(Math.random() *netflixOriginals.length)
    const [movie,setMovie]=useState({} as Movie)
    useEffect(() => {
      setMovie(netflixOriginals[random]) 
    }, [])
    
  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div className='absolute top-0 left-0 h-[95vh] w-full -z-10  '>
<Image src={`${baseUrl}${movie?.backdrop_path}`} className='' layout='fill' objectFit='cover' />
      </div>
      <h1 className='text-3xl md:text-5xl xl:text-7xl max-w-2xl font-bold '>
      {movie?.title||movie?.name||movie?.original_name}
      </h1>
      <p className=' text-sm md:max-w-4xl lg:max-w-5xl text-shadow-md opacity-80'>{movie?.overview?.length>350?`${movie?.overview.slice(0,350)}...`:movie?.overview}</p>
    <div className='flex space-x-3'>
      <button className='bannerBtn bg-white/75  text-black'>
        <FaPlay className='h-4 w-4 text-black md:h-7 md:w-7 '/>
        Play</button>
      <button className='bannerBtn bg-[gray]/70'>More Info
      <InformationCircleIcon className='h-5 w-5 md:h-6 md:w-8'/>
      </button>
    </div>
    </div>
  )
}
