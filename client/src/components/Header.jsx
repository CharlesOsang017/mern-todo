import React from 'react'

const Header = () => {
  return (
    <nav className='bg-slate-400 w-full flex justify-between h-10 shadow-md'>
        <div className="my-2 ml-3 cursor-pointer">LOGO <span className="hidden sm:inline cursor-pointer">Todos</span></div>
        <ul className="my-2 mr-3 flex gap-3">
            <li className='hover:underline cursor-pointer'>todos</li>
            <li className='hover:underline cursor-pointer'>about</li>
        </ul>
    </nav>
  )
}

export default Header