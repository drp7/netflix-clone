import { Movie } from '../typing';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Thumbnail from './Thumbnail';
import { useRef, useState } from 'react';
interface Props{
    title:string;
    movies:Movie[]
}
export default function Row({title,movies}:Props) {
 
  const rowRef=useRef<HTMLDivElement>(null)
  const [isMoved,setisMoved]=useState<boolean>(false)
  const handleClick=(direction:string):void=>{
setisMoved(true)
if(rowRef.current){
const {scrollLeft,clientWidth}=rowRef.current
const scrollTo=direction==="left"?scrollLeft-clientWidth:scrollLeft+clientWidth
rowRef.current.scrollTo({left:scrollTo,behavior:"smooth"})
}
  }
  return (
    <div className='space-y-2'>
        <h2 className=' font-semibold min-w-fit text-shadow-sm text-neutral-300 hover:text-white transition cursor-pointer'>{title}</h2>
        <div className='group relative md:-ml-2  '>
          <ChevronLeftIcon onClick={()=>handleClick("left")} className={`absolute inset-y-0 left-2 z-40 h-9 w-9 my-auto cursor-pointer transition hover:scale-125 opacity-0 group-hover:opacity-100  ${!isMoved&&"hidden"}`}/>
          <ChevronRightIcon onClick={()=>handleClick("right")} className='absolute inset-y-0 right-2 z-40 h-9 w-9 my-auto cursor-pointer transition hover:scale-125 opacity-0 group-hover:opacity-100'/>
          
  <div ref={rowRef}  className='flex items-center overflow-x-auto gap-0.5 md:gap-2.5 md:p-2 snap-x hideScrollbar scroll-smooth'>

{
    movies.map((movie,index)=>(
      <Thumbnail movie={movie} index={index}/>
   ))
}
</div>
        </div>
    </div>
  )
}
