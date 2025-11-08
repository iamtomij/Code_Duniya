import React, { Children } from 'react'

function container({ children}) {
  return (
    <div className='max-w-[1180px] mx-auto px-2.5 md:px-0'>{children}</div>
  )
}

export default container