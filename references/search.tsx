import React from 'react'
import Cards from '../components/ui/card'
import Button from '../components/ui/button'
import { Search } from 'lucide-react'
import Input from '../components/ui/input'

const Searchbar= () => {
  return (
<section className='w-full rounded-xl  bg-neutral-100 flex justify-center items-center h-dvh'>
    <Cards className='flex gap-2 w-1/2 p-1.5 rounded-md  justify-between items-center '>
      <Input placeholder='search ' className='rounded-full bg-transparent border-none' />
      <Button className='w-11 flex bg-transparent justify-center text-neutral-950 items-center'>
         <Search/>
        </Button>
       
    </Cards>
    </section>   )
}

export default Searchbar
