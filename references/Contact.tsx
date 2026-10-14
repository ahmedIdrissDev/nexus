import React from 'react'
import Cards from '../components/ui/crad'
import Button from '../components/ui/button'
import Input from '../components/ui/input'
import Textspace from '../components/ui/textspace'
import Image from 'next/image'
import Lable from './lable'

const Contact = () => {
  return (
<section className='w-full rounded-xl  bg-neutral-100 flex justify-center items-center h-dvh'>
    <Cards className='flex flex-col gap-1.5 '>
             <Image src={'/icons/Contact.svg'} width={1000} height={1000} alt='logo' className='w-20' />
        
        <h2>Get in Touch</h2>
        <p> Have a question or an idea? We'd love to hear from you. Send us a message and we'll get back to you soon.</p>
            <Lable>email</Lable>

      <Input placeholder='Email' className='rounded-md' />
      <Lable>Message</Lable>
      <Textspace/>
       <Button className='rounded-md text-white'>
        send Message
       </Button>
    </Cards>
    </section>   )
}

export default Contact