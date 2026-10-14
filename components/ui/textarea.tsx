import React from 'react'
import { twMerge } from 'tailwind-merge';

interface TextInterface extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textspace = ({ className, placeholder = 'message ', ...props }: TextInterface) => {
  return <textarea {...props} placeholder={placeholder} className={twMerge('textarea', className)} />
}

export default Textspace
