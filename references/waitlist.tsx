import Button from '../components/ui/button'
import Cards from '../components/ui/card'
import Input from '../components/ui/input'
import Image from 'next/image'
import React from 'react'

const   Waitlist = () => {
  return (
    <section className='w-full  rounded-xl bg-neutral-100 flex justify-center items-center h-dvh'>
    <Cards className='flex gap-2 flex-col justify-center items-center'>
     <Image src={'/icons/hello.svg'} width={1000} height={1000} alt='logo' className='w-20' />
      <h1 className='text-2xl'>Be First in Line </h1>
      <p>mething exciting is on the way. Join our waitlist to get early access and be the first to know when we launch.</p>
      <Input placeholder='contact@gmail.com' className='rounded-full focus:border-neutral-100'/>
      <Button className='text-white'>
         Join the Waitlist 
      </Button>
    </Cards>
    </section>
  )
}

export default  Waitlist
