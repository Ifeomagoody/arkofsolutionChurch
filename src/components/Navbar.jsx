
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BiChevronDown, BiMenu, BiX} from 'react-icons/bi'


export const Navbar = () => {
  const [selectedOverOption, setSelectedOverOption] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)


   
  const optionsArray = [
     'Sermons',
     'Sermons Single',
     'Dropdowns'
  ]

  function handleMouseOver (){
        setShowDropDown(prev => !prev)
  }

  function handleOptionSelect(){
       setSelectedOverOption(prevOption => !prevOption)
       setShowDropDown(false)
  }

  function handleClick(){
    setMobileMenu(mobileMenu => !mobileMenu)
  }

  return (
    <nav >
        <div className='text-[#e7dada] bg-transparent fixed  z-1  top-0 left-0  right-0  mx-auto  items-center flex justify-around '>

            <Link to='/'>ArkofSolution</Link>     
           
        <div className='md:flex hidden items-center gap-6 h-16'>
    <NavLink to='/'>Home</NavLink >
    <button onMouseOver={handleMouseOver}>
    <NavLink to='/sermons' className='flex items-center hover:text-[#d3cccc] justify-center align-center'>
           Sermons
         <span className='m-2'>
              {selectedOverOption}
              <BiChevronDown   
              className={`${showDropDown && 'rotate-180'}`} 
              />
         </span>    
    </NavLink >    
        {showDropDown && (
          <ul className='absolute bg-white py-3 px-2 rounded-sm mt-2 shadow-md'>
             {optionsArray.map((item, index) => (
            <li onClick={() => handleOptionSelect(item)} key={index} className='py-2 border-b border-[#231f1f1a] text-black cursor-pointer transition delay-250 duration-300'>{item}</li>
           ))}
          </ul>
        )}
    </button>

    <NavLink to='/ministries' className='hover:text-[#e7dada] transition delay-150 duration-300'>Ministries</NavLink >
    <NavLink to='/events' className='hover:text-[#e7dada] transition delay-150 duration-300'>Events</NavLink >
    <NavLink to='/contact' className='hover:text-[#e7dada] transition delay-150 duration-300'>Contact</NavLink >
    <NavLink to='/request' className='border-2 bg-transparent border-[#ffffff1a] flex-none cursor-pointer px-6 py-2  rounded-full hover:bg-[#93c5fd] transition delay-150 duration-300'>Request a Prayer</NavLink >
        </div>
           

     <div className='md:hidden'>
          <button onClick={handleClick}>
               {mobileMenu ? <BiX size={24}/> : <BiMenu size={24}/>}
          </button>
     </div>
      </div>

      {mobileMenu && (
        <div className='md:hidden fixed top-7.5 right-0 w-64 bg-white px-4 pb-4  space-y-8 flex flex-col'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/sermons'>Sermons</NavLink>
          <NavLink to='/ministries'>Ministries</NavLink>
          <NavLink to='/events'>Events</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/request'>Request</NavLink>
        </div>
      )

      }

    </nav>
  )
}
