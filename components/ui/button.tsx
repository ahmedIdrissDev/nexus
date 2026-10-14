import React from 'react'
import { twMerge } from 'tailwind-merge';

interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({
  children,
  className,
  ...props
}: ButtonInterface) => {
  return (
    <button
      {...props}
      className={twMerge(
        'button',
        className,
      )}
    >
        {children}
    </button>
  )
}

export default Button
