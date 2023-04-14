import React from 'react'
import { Movie } from '../typing'
import { baseUrl } from '../constants/movie';
import Image from 'next/image';

interface Props{
    movie:Movie;
    index:number
}
export default function Thumbnail({index,movie}:Props) {
  return (
    <figure className='snap-center cursor-pointer relative min-w-[180px] md:min-w-[240px] h-32  md:h-40 p-3   flex flex-col justify-end  '  key={index}>
  
      <div className='absolute inset-0  
      '>
<Image src={`${baseUrl}${movie?.backdrop_path||movie.poster_path}`} className='object-cover rounded-sm md:rounded  hover:opacity-60 transition' layout='fill' loading='lazy'   />
</div>
<figcaption className='relative'>
<h3 className='text-sm font-medium'>{movie.title}</h3>
</figcaption>

  </figure>
  )
}
