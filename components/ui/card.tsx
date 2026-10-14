import React from 'react'
import { twMerge } from 'tailwind-merge'

interface CardInterface extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Cards = ({ children, className, ...props }: CardInterface) => {
  return (
    <div {...props} className={twMerge('cards w-96 h-max', className)}>{children} </div>
  )
}

export default Cards
