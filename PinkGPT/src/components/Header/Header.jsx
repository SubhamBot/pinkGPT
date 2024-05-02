import React from 'react'
import { Link, NavLink } from 'react-router-dom';
function Header(){
  return(
    <div className='fixed top-1 right-10 w-50 h-6 z-50 rounded-lg font-semibold bg-red-300 bg-transparent'>
      <nav>
        <div>
          <ul className='flex'>
            <li className='mr-2 h-6 text-2xl'>
              <NavLink
                to="/"
                  className={({isActive})=>
                    `${isActive ? "text-pink-900 rounded-lg bg-red-200":"text-pink-900 bg-red-300 bg-transparent"} lg:hover:bg-pink-900 hover:rounded-lg hover:text-white`

                }
              >
                Home
              </NavLink>
            </li>
            
            <li className='mr-2 h-6 text-2xl'>
              <NavLink
                to="/Chat"
                  className={({isActive})=>
                    `${isActive ? "text-pink-900 rounded-lg bg-red-200":"text-pink-900 bg-red-300 bg-transparent"} lg:hover:bg-pink-900 hover:rounded-lg hover:text-white`

                }
              >
                New Chat
              </NavLink>
            </li>
            <li className='mr-2 h-6 text-2xl'>
              <NavLink
                to="/About"
                  className={({isActive})=>
                    `${isActive ? "text-pink-900 rounded-lg bg-red-200":"text-pink-900 bg-red-300 bg-transparent"} lg:hover:bg-pink-900 hover:rounded-lg hover:text-white`

                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header