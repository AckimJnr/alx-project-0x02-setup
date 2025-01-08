import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav>
                <ul className="flex space-x-4 justify-center">
                    <li>
                        <Link href="/home" className="hover:text-yellow-400">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-yellow-400">
                            About
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="/contact" className="hover:text-yellow-400">
                            Contact
                        </Link>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;