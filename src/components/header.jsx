import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className='px-6 lg:px-0 md:p-0 md:pl-6 h-24 flex justify-between items-center'>
            <img src='/assets/shared/logo.svg' alt="" className='h-12 w-12' />
            {/* Line */}
            <div className='hidden lg:block h-[1px] bg-white lg:ml-12 flex-grow' />
            {/* Menu icon */}
            <img src='/assets/shared/icon-hamburger.svg' alt="" className={classnames('md:hidden', { 'hidden': isOpen, 'block': !isOpen })} onClick={toggleMenu} />
            {/* Close Icon */}
            <img src='/assets/shared/icon-close.svg' alt="" className={classnames('md:hidden relative z-[2]', { 'hidden': !isOpen, 'block': isOpen })} onClick={toggleMenu} />
            <div className={classnames('absolute top-0 right-0 bottom-0 left-[30%] md:static md:px-16 h-full font-body-cond \
               tracking-widest text-secondary bg-[rgba(255,_255,_255,_0.1)] backdrop-blur-2xl md:flex md:gap-12 items-center z-[1]', {
                'hidden': !isOpen,
                'block': isOpen
            })}>
                <ul className="mt-24 md:mt-0 md:flex md:gap-12 md:items-center md:h-full">
                    <li className='px-16 pb-8 md:px-0 md:pb-0 md:h-full'>
                        <NavLink
                            to='/'
                            className={({ isActive }) => classnames('no-underline md:h-full md:flex md:items-center md:hover:border-b hover:border-white', { 'md:border-b-2 md:border-white': isActive })}>
                            <><span className='pr-2 font-bold'>00</span>HOME</>
                        </NavLink>
                    </li>
                    <li className='px-16 pb-8 md:px-0 md:pb-0 md:h-full'>
                        <NavLink
                            to='/destination'
                            className={({ isActive }) => classnames('no-underline md:h-full md:flex md:items-center md:hover:border-b hover:border-white', { 'md:border-b-2 md:border-white': isActive })}>
                            <><span className='pr-2 font-bold'>03</span>DESTINATION</>
                        </NavLink>
                    </li>
                    <li className='px-16 pb-8 md:px-0 md:pb-0 md:h-full'>
                        <NavLink
                            to='/crew'
                            className={({ isActive }) => classnames('no-underline md:h-full md:flex md:items-center md:hover:border-b hover:border-white', { 'md:border-b-2 md:border-white': isActive })}>
                            <><span className='pr-2 font-bold'>03</span>CREW</>
                        </NavLink>
                    </li>
                    <li className='px-16 pb-8 md:px-0 md:pb-0 md:h-full'>
                        <NavLink
                            to='/technology'
                            className={({ isActive }) => classnames('no-underline md:h-full md:flex md:items-center md:hover:border-b hover:border-white', { 'md:border-b-2 md:border-white': isActive })}>
                            <><span className='pr-2 font-bold'>03</span>TECHNOLOGY</>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default Header;