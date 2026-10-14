import React from 'react'
import { twMerge } from 'tailwind-merge'
interface CardInterface  {
   children : React.ReactNode ,
      className?:string , 

}
const Cards = ({children ,className}:CardInterface) => {
  return (
    <div className={twMerge('cards w-96 h-max', className)}>{children} </div>
  )
}

export default Cards