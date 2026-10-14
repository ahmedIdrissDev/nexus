import React from 'react'
import Button from '../components/ui/button'
import Cards from '../components/ui/crad'
import { Plus, Send } from 'lucide-react'
import Input from '../components/ui/input'

const Chat = () => {
  return (
<section className='w-full rounded-xl  bg-neutral-100 flex justify-center items-center h-dvh'>
    <Cards className='flex p-1  w-1/2 justify-between items-center gap-1.5 '>
        <Button className='rounded-full text-neutral-950 bg-transparent h-11 w-11 flex justify-center items-center'>
        <Plus/>
       </Button>
        <Input placeholder='Ask ChatGPT' className='bg-transparent border-0 '/>
       <Button className='rounded-full text-neutral-950 bg-transparent h-11 w-11 flex justify-center items-center'>
        <Send/>
       </Button>
    </Cards> 
    </section>
     )
}

export default Chat
