import React from 'react'
import Open from '../assets/chevrons-right.svg'
import Linkedin from '../assets/linkedin.svg'

function LandingPage() {
  return (
    <div className='h-[100vh] w-[100%] bg-[url(./assets/BACKGROUND.png)]'>

        {/** Menu */}
        <div className='pt-4 pl-4'>
        <div className='bg-[#5F439B] w-fit flex items-center gap-2 p-2 rounded '>
            <div className='bg-black w-fit p-1 rounded-full'>
                <img src={Open} alt="" />
            </div>
            <p>Menu</p>
        </div>
        </div>
        {/**End of Menu code */}

        
        <div className='flex items-center gap-4'>

            {/**Menu side bar */}
        <div className='pt-4'>
            <div className='w-2 h-[80vh] bg-[#5F439B] rounded'>
            </div>
        </div>
            {/**End */}

         <div>
               {/**Bio */}
        <div className='text-white mt-[50%]'>
            <div className='p-2'>
                <p>Hello, i am Adepoju Oluwatobi</p>
                <p className='font-bold text-[34px]'>WEB DEVELOPER</p>
                <p className='text-[24px] font-bold'>{`< FULL STACK />`}</p>
            </div>
        </div>

        <div className='flex gap-10'>
            <div className='bg-[#5F439B] w-fit p-4 rounded'>
                <img src={Linkedin} alt="" />
            </div>

            <div className='bg-[#5F439B] w-fit p-4 rounded'>
                <img src={Linkedin} alt="" />
            </div>

            <div className='bg-[#5F439B] w-fit p-4 rounded'>
                <img src={Linkedin} alt="" />
            </div>
        </div>

         </div>
        </div>
    </div>
  )
}

export default LandingPage