import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    // Define the nav items with independent colors
    const navItems = [
        { to: '/', label: 'Home', color: 'bg-orange-500', hover: 'hover:bg-orange-600', rounded: false },
        { to: '/archive', label: 'Archive', color: 'bg-green-400', hover: 'hover:bg-green-500', rounded: true },
        { to: '/about', label: 'About', color: 'bg-blue-400', hover: 'hover:bg-blue-500', rounded: false },
        { to: '/article', label: 'Article', color: 'bg-gray-400', hover: 'hover:bg-gray-500', rounded: true },
    ];

    return (
        <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex items-center gap-1">
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
    );
};

const NavPill = ({ to, label, active, color, hover, rounded }) => (
    <Link
        to={to}
        className={`px-4 py-3 text-lg mt-4 z-90 font-bold uppercase tracking-wider transition-all duration-300
      ${active ? color + ' text-black' : color + ' text-white ' + hover}
      ${rounded ? 'rounded-full' : ''}`}
    >
        {label}
    </Link>
);

export default Navbar;
