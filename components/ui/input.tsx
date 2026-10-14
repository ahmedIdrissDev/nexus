import React from 'react'
import { twMerge } from 'tailwind-merge'

interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, ...props }: InputInterface) => {
  return <input {...props} type='text' className={twMerge('input', className)} />
}

export default Input
