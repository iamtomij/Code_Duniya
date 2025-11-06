import React from 'react'

const Titlle = ({main_titlle, sub_title}) => {
  return (
    <div className='text-center'>
    <h2 className='font-bold text-4xl text-black '>{main_titlle}</h2>
    <p className='text-xl text-medium text-black mt-[15px]'>{sub_title}</p>
    </div>
  )
}

export default Titlle