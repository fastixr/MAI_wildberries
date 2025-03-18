"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import Container from './Container';
import AuthModal from './ui/AuthModal';
import SideMenu from './ui/SideMenu';
import { motion, AnimatePresence } from 'framer-motion';
import '../app/globals.css';
import '../app/header.css';
import { useZoom } from './hooks/useZoom';
import MenuButton from './ui/MenuButton';
import RightIcons from './ui/RightIcons';
import { sideMenuVariants } from '../lib/animation';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isZoom200, setIsZoom200] = useState(false);

  useZoom();

  useEffect(() => {
    const headerElement = headerRef.current;

    if (!headerElement) return;

    const checkZoom200 = () => {
      setIsZoom200(headerElement.classList.contains('zoom-200'));
    };

    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          checkZoom200();
        }
      }
    });

    observer.observe(headerElement, {
      attributes: true,
    });

    checkZoom200();

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const menu = document.querySelector('.side-menu');
      if (menu && !menu.contains(e.target as Node)) {
        setIsMenuOpen(false);
        document.body.classList.remove('overflow-hidden');
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoginClick = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  
    if (!isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  return (
    <div className="header-wrapper" id="header-wrapper">
      <header className="header" id="header" ref={headerRef} style={{ height: 'var(--header-height)' }}>
        <Container>
          <div className="flex items-center justify-between py-10" style={{ height: 'var(--header-height)' }}>
            <div className="logo-menu">
              <div className="flex-shrink-0 transform -translate-y-1">
                <Link href="/">
                  <Image
                    src="/logos/logo.svg"
                    alt="Логотип"
                    width={240}
                    height={38}
                  />
                </Link>
              </div>

              <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>

            <div className="flex-grow flex items-center ml-[15px]">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Найти на Wildberries"
                  className="search-bar-input"
                  style={{ 
                    height: 'var(--search-bar-height)',
                  }}
                />
              </div>
            </div>

            <RightIcons isZoom200={isZoom200} handleLoginClick={handleLoginClick} />
          </div>
        </Container>
        <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseAuthModal} />

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideMenuVariants}
            >
              <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;