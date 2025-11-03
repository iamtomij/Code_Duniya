import React from 'react'



const Category_item = ({item}) => {

  return (
    <div className='bg-secondary pt-3.5 rounded-[25px] max-w-[230px] text-center pb-8 cursor-pointer hover:shadow-lg hover:shadow-blue-500/50'>
      <img className='mx-auto' src={item.icon} alt="{item.name}" />
      <h3 className='text-2xl font-semibold text-white mt-2.5' >{item.name}
        
      </h3>
    </div>
  )
}

export default Category_item