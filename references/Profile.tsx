import React from 'react'
import Cards from '../components/ui/card'
import Image from 'next/image'

const Profile = () => {
  return (
    <>
    <section className='w-full rounded-xl  bg-neutral-100 flex justify-center items-center h-dvh'>
    
    <Cards className='bg-transparent'>
        <Image className='rounded-full w-12 border-4 border-white' width={1000} height={1000} quality={1000} alt='logo' src={'/icons/avatar.png'} />
    </Cards>
    </section> 
    </>
  )
}

export default Profile
