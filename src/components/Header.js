import React from 'react';
import Logo from '../assets/Hernan.png';


const Header = () => {
  return (
  
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img className='w-20 rounded-2xl'src={Logo}  alt=''/>
        </a>
        <button className='btn btn-sm'>2023 </button>
      </div>
    </div>
  </header>
  );
  
};

export default Header;
