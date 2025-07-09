// components/Layout/Header.js
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/donation', label: 'Donation', icon: '💝' },
    { href: '/notification', label: 'Notification', icon: '🔔' },
    { href: '/whats-going-on', label: 'What\'s Going On', icon: '📅' },
    { href: '/about-us', label: 'About Us', icon: 'ℹ️' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🐾</span>
          <span className={styles.logoText}>Adopt A Friend</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                >
                  <span className={styles.linkIcon}>{link.icon}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sign In Button */}
        <div className={styles.authButton}>
          <Link href="/sign-in" className={styles.signInBtn}>Sign In</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
        <ul className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className={styles.linkIcon}>{link.icon}</span>
                {link.label}
              </Link>
            </li>
          ))}
          <li className={styles.mobileAuthButton}>
            <Link href="/sign-in" className={styles.mobileSignInBtn}>Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;