import React from 'react'
import { twMerge } from 'tailwind-merge'

type InputInterface = React.InputHTMLAttributes<HTMLInputElement>

const Input = ({ className, ...props }: InputInterface) => {
  return <input {...props} type='text' className={twMerge('input', className)} />
}

export default Input
