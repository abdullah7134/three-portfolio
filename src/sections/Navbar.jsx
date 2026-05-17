import React from 'react';
import { navLinks } from "../constants/index.js";

const Navitem = () => {
    return (
        <ul className="flex gap-6 text-neutral-400 font-medium">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="hover:text-white transition-colors duration-300 cursor-pointer">
                    <a href={href}>{name}</a>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between py-5 px-4">
                    <a
                        href="/"
                        className="text-neutral-400 font-bold hover:text-white transition-colors duration-300"
                    >
                        Abdullah
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="toggle menu"
                    >
                        <img
                            src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
                            alt="menu"
                            className="w-6 h-6"
                        />
                    </button>

                    {/* Desktop Nav */}
                    <nav className="hidden sm:flex">
                        <Navitem />
                    </nav>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="sm:hidden px-4 pb-4">
                        <Navitem />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
