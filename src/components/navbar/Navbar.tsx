import { useState } from 'react';

import { Close, Logo, Menu } from '../icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex items-center justify-between'>
      <div className='h-[50] w-[30] xl:hidden'>
        <Logo width={55} height={30} />
      </div>

      <div className='xl:block'>
        <Logo className='hidden xl:block' />
      </div>

      <ul className='flex hidden items-center space-x-10 xl:flex'>
        <li className='text-[15px] leading-[26px]'>
          <a
            href='#'
            className='text-dark-gray hover:text-primary-red active:text-primary-red'
          >
            Home
          </a>
        </li>
        <li className='text-[15px] leading-[26px]'>
          <a
            href='#'
            className='text-dark-gray hover:text-primary-red active:text-primary-red'
          >
            New
          </a>
        </li>
        <li className='text-[15px] leading-[26px]'>
          <a
            href='#'
            className='text-dark-gray hover:text-primary-red active:text-primary-red'
          >
            Popular
          </a>
        </li>
        <li className='text-[15px] leading-[26px]'>
          <a
            href='#'
            className='text-dark-gray hover:text-primary-red active:text-primary-red'
          >
            Trending
          </a>
        </li>
        <li className='text-[15px] leading-[26px]'>
          <a
            href='#'
            className='text-dark-gray hover:text-primary-red active:text-primary-red'
          >
            Categories
          </a>
        </li>
      </ul>

      <div className='flex items-center xl:hidden'>
        <button onClick={() => setIsOpen(true)}>
          <Menu />
        </button>

        {isOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-50'>
            <div className='fixed inset-y-0 left-1/3 right-0 bg-white'>
              <div className='absolute top-6 right-0 pr-4'>
                <button onClick={() => setIsOpen(false)}>
                  <Close />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
