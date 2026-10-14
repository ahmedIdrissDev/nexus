import React from 'react'
import { twMerge } from 'tailwind-merge';
interface TextInterface  {
   onClick?: ()=> void ;
   className?:string , 
}
const Textspace = ({className}:TextInterface) => {
  return (
    <textarea placeholder='message ' className={twMerge('textarea',className)}/>

  )
}

export default Textspace