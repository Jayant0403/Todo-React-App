import React from 'react'

const Navbar = () => {
  return (
    <nav className=' bg-blue-900 text-white  flex justify-around py-2 '>
        <div className="logo">
           <span className='font-bold text-xl mx-9'>iTask</span>
        </div>
        <ul className='flex gap-10 justify-around'>
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'> Your tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
