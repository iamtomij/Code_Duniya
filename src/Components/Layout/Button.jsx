// ./Layout/Button.jsx

import React from 'react'

// 💡 পরিবর্তন: onClick prop-টিকে গ্রহণ করা হলো
const Button = ({ title, className, onClick }) => { 
  return (
    // 💡 পরিবর্তন: onClick হ্যান্ডলারকে <button> এলিমেন্টে পাস করা হলো
    <button className={className} onClick={onClick}> 
        {title}
    </button>
  )
}

export default Button