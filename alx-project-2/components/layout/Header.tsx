import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;