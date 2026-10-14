import React from 'react'
import { twMerge } from 'tailwind-merge'
interface InputInterface  {
      className?:string , 
      placeholder?:string ,
}
const Input = ({className , ...props}:InputInterface) => {
  return (
    <input type='text' {...props} className={twMerge('input', className)}  />
  )
}

export default Input