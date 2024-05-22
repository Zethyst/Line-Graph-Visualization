import React from 'react'

function DataLabels() {
  return (

    <div className='flex flex-col gap-2 translate-x-5 translate-y-2 tracking-wider'>
        <div className='w-48 flex justify-start items-center'> 
          <div className='p-2 h-2 w-1 rounded-full bg-[#6B120A]'></div>
          <p className='text-[10px] font-semibold px-2 text-[#353535] uppercase'>NHAVA SHEVA, INDIA</p>
        </div>
        <div className=' w-56  flex justify-start items-center'> 
          <div className='p-2 h-2 w-1 rounded-full bg-[#EB5D50]'></div>
          <p className='text-[10px] font-semibold px-2 text-[#353535] uppercase'>HONG KONG, HONG KONG</p>
        </div>
        <div className=' w-56  flex justify-start items-center'> 
          <div className='p-2 h-2 w-1 rounded-full bg-[#F7A668]'></div>
          <p className='text-[10px] font-semibold px-2 text-[#353535] uppercase'>YANTIAN, CHINA</p>
        </div>
        <div className=' w-56  flex justify-start items-center'> 
          <div className='p-2 h-2 w-1 rounded-full bg-[#7BB896]'></div>
          <p className='text-[10px] font-semibold px-2 text-[#353535] uppercase'>DALIAN, CHINA</p>
        </div>
        <div className=' w-56  flex justify-start items-center'> 
          <div className='p-2 h-2 w-1 rounded-full bg-[#1073E6]'></div>
          <p className='text-[10px] font-semibold px-2 text-[#353535] uppercase'>LONDON GATEWAY PORT, UK</p>
        </div>
        <div className=' w-56  flex justify-start items-center'> 
          <div className='p-2 h-2 w-1 rounded-full bg-[#856562]'></div>
          <p className='text-[10px] font-semibold px-2 text-[#353535] uppercase'>OTHER</p>
        </div>
    </div>
  )
}

export default DataLabels