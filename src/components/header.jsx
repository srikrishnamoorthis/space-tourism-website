import logo from '../assets/shared/logo.svg';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className='h-24 flex justify-between items-center'>
            <img src={logo} alt="" className='h-12 w-12'/>
            <div className='h-[1px] bg-white lg:ml-12 flex-grow'/>
            <ul className="px-24 h-full flex gap-12 items-center justify-center font-body text-secondary bg-transparent backdrop-blur-2xl">
                <li className=''>
                <NavLink
                    to='/'>
                    {({ isActive }) => (<><span className='pr-2'>00</span>HOME</>)}
                </NavLink>
                </li>
                <li>
                <NavLink
                    to='/destination'>
                    {({ isActive }) => (<><span className='pr-2'>03</span>DESTINATION</>)}
                </NavLink>
                </li>
                <li>
                <NavLink
                    to='/crew'>
                    {({ isActive }) => (<><span className='pr-2'>03</span>CREW</>)}
                </NavLink>
                </li>
                <li>
                <NavLink
                    to='/technology'>
                    {({ isActive }) => (<><span className='pr-2'>03</span>TECHNOLOGY</>)}
                </NavLink>
                </li>
            </ul>
        </nav >
    )
}

export default Header;