import React from 'react'
import Cards from '../components/ui/card'
import Button from '../components/ui/button'
import { AlertCircle } from 'lucide-react'
const Alert = () => {
  return (
<section className='w-full rounded-xl  bg-neutral-100 flex justify-center items-center h-dvh'>
    <Cards>
      <div className="flex gap-2 flex-col justify-center items-center ">
        <AlertCircle/>
      <h1 className='text-2xl'>Something Went Wrong</h1>
      <p>We couldn&apos;t add you to the waitlist. </p>
      <div className="grid h-max w-full  grid-cols-2 gap-1.5">

      <Button className='text-red-950 bg-red-100' >
         cancel
        </Button>
        <Button className='text-white'  >
         Join the Waitlist 
        </Button>
      </div>
      </div>
    </Cards>
    </section>  )
}

export default Alert
