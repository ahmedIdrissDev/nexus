import React from 'react'
import { twMerge } from 'tailwind-merge'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const Label = ({ children, className, ...props }: LabelProps) => {
  return <label {...props} className={twMerge('label', className)}>{children}</label>
}

export default Label
