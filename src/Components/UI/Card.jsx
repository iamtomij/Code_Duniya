import React from 'react'

function Card({mal}) {
  return (
    <div className='bg-gray-900 text-white py-9 px-7 max-w-full  rounded-[15px] pb-12 '>
             <h1 className='text-[36px] font-semibold font-anek'>{mal.parsan} </h1>
               <h2 className='text-[36px] font-semibold font-anek'>{mal.title} </h2>
                 <p className='text-[16px] font- font-anek'>{mal.desc} </p>
    </div>
  )
}

export default Card