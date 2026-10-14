import React from 'react'
import { twMerge } from 'tailwind-merge'
interface Lable  {
   children : React.ReactNode ,
      className?:string , 

}
const Lable = ({children , className}:Lable) => {
  return (
    <label className={twMerge('label' ,className)} >{children} </label>
  )
}

export default Lable