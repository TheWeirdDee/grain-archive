import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Images/Logo.png';

const Navbar = () => {
    const location = useLocation();

    const navItems = [
        { to: '/', label: 'Home', color: 'bg-orange-500', hover: 'hover:bg-orange-600', rounded: false },
        { to: '/archive', label: 'Archive', color: 'bg-green-400', hover: 'hover:bg-green-500', rounded: true },
        { to: '/about', label: 'About', color: 'bg-blue-400', hover: 'hover:bg-blue-500', rounded: false },
        // { to: '/article', label: 'Article', color: 'bg-gray-400', hover: 'hover:bg-gray-500', rounded: true },
    ];

    return (
        <>

            <div className="fixed top-4 md:top-8 left-4 md:left-8 z-[1000] pointer-events-auto">
                <Link to="/" className="flex-shrink-0">
                    <img
                        src={Logo}
                        alt="Grain Archive Logo"
                        className="w-10 h-10 md:w-12 md:h-12 object-contain hover:scale-110 transition-transform duration-300"
                    />
                </Link>
            </div>


            <nav className="fixed top-4 md:top-8 left-1/2 transform -translate-x-1/2 z-[999] w-full max-w-fit px-2 md:px-4 pointer-events-auto">
                <div className="flex flex-wrap items-center justify-center gap-1 p-1">
                    {navItems.map((item) => (
                        <NavPill
                            key={item.to}
                            to={item.to}
                            label={item.label}
                            color={item.color}
                            hover={item.hover}
                            active={location.pathname === item.to}
                            rounded={item.rounded}
                        />
                    ))}
                </div>
            </nav>
        </>
    );
};

const NavPill = ({ to, label, active, color, hover, rounded }) => (
    <Link
        to={to}
        className={`md:px-4 px-2 md:py-3 py-1 md:text-lg text-[12px] md:text-[14px] font-bold uppercase tracking-wider transition-all duration-300 pointer-events-auto
        ${active ? color + ' text-black shadow-lg scale-105' : color + ' text-white ' + hover}
        ${rounded ? 'rounded-full' : 'rounded-md'}`}
    >
        {label}
    </Link>
);

export default Navbar;
