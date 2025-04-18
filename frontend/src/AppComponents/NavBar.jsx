import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {
  return (
    <>
      <div id='navbar' className='shadow-md bg-white p-2 px-3 sticky top-0 z-50 overflow-x-hidden'>
        <div className='mx-auto flex max-w-[1280px] px-3 items-center justify-between'>
          <Link to={'https://www.linkedin.com/in/krishna-chelluboina/'} target='_blank'><img src={Logo} className='h-16' alt='Logo' /></Link>
          <div className='flex gap-2'>
            <Link target='_blank' to={'https://krishnavamsi-portfolio.vercel.app/'}>
                <div className='border p-3 px-5 rounded-xl shadow-xl bg-[#0442ED] text-white font-medium hover:bg-black text-lg'>
                    My Portfolio
                </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar
