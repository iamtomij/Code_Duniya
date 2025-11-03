import React, { Children } from 'react'

function container({ children}) {
  return (
    <div className='w-[1180px] mx-auto'>{children}</div>
  )
}

export default container