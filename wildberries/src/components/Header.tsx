"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Container from './Container';
import AuthModal from './ui/AuthModal';
import SideMenu from './ui/SideMenu';
import { motion, AnimatePresence } from 'framer-motion';
import '../app/globals.css';
import '../app/header.css';

const menuIconVariants = {
  open: {
    rotate: 0,
    y: 3,
    transition: { duration: 0.2 },
  },
  closed: {
    rotate: 0,
    y: 0,
    transition: { duration: 0.2 },
  },
};

const lineVariants = {
  open: (custom: number) => ({
    opacity: custom === 1 ? 0 : 1, // Средняя полоска исчезает
    y: custom === 0 ? 2 : custom === 2 ? -6 : 0, // Верхняя и нижняя полоски движутся к центру (отступ 2px между ними)
    rotate: custom === 0 ? 45 : custom === 2 ? -45 : 0, // Поворот верхней и нижней полоски
    transition: { duration: 0.2 },
  }),
  closed: (custom: number) => ({
    opacity: 1,
    y: custom === 0 ? -6 : custom === 2 ? 6 : 0, // Отступы 10px между полосками в закрытом состоянии
    rotate: 0,
    transition: { duration: 0.2 },
  }),
};

const sideMenuVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30, ease: 'easeInOut' }, // Добавляем сглаживание
  },
  closed: {
    x: '-100%',
    opacity: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30, ease: 'easeInOut' }, // Добавляем сглаживание
  },
};

const Header: React.FC = () => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const menu = document.querySelector('.side-menu');
      if (menu && !menu.contains(e.target as Node)) {
        setIsMenuOpen(false);
        document.body.classList.remove('overflow-hidden'); // Включаем прокрутку страницы
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
      document.body.classList.add('overflow-hidden'); // Отключаем прокрутку страницы
    } else {
      document.body.classList.remove('overflow-hidden'); // Включаем прокрутку
    }
  };

  return (
    <header className="header">
      <Container>
        <div className="flex items-center justify-between py-10">
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

            <button 
              onClick={toggleMenu}
              className="ml-[18px] relative w-[60px] h-[60px] group appearance-none focus:outline-none min-w-[60px] min-h-[60px]"
            >
              <div
                className="w-full h-full rounded-[15px] border border-white opacity-35 group-hover:opacity-100 transition-opacity"
                style={{ borderWidth: '1px' }}
              />
              <motion.div
                className="absolute top-7 left-[19px] transform -translate-x-1/2 -translate-y-1/2"
                variants={menuIconVariants}
                animate={isMenuOpen ? 'open' : 'closed'}
              >
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-[30px] h-[3px] bg-white rounded-full absolute left-[-3px] transform -translate-x-1/2"
                    variants={lineVariants}
                    custom={index} // Передаём индекс как custom
                    style={{
                      top: `${index * 4 - 4}px`,
                      borderRadius: '50px', // Изменяем отступы для выравнивания полосок
                    }}
                  />
                ))}
              </motion.div>
            </button>
          </div>

          <div className="flex-grow flex items-center ml-[15px]">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Найти на Wildberries"
                className="w-full h-[60px] rounded-[17px] bg-white focus:outline-none px-4 text-black text-[1rem] font-sans font-regular"
              />
            </div>
          </div>

          <div className="right-icons">
            <div className="flex flex-col items-center address">
              <Image
                  src="/icons/address.svg"
                  alt="Адрес"
                  width={20}
                  height={30}
                />
              <Link href="/addresses" className="mt-[0.5rem] text-white text-[0.875rem] font-hauss font-medium opacity-50 hover:opacity-100">
                Адреса
              </Link>
            </div>

            <div className="flex flex-col items-center" onClick={handleLoginClick}>
              <Image
                  src="/icons/user.svg"
                  alt="Авторизация"
                  width={25}
                  height={25}
                />
              <button className="mt-[0.5rem] text-white text-[0.875rem] font-hauss font-medium opacity-50 hover:opacity-100">
                Войти
              </button>
            </div>

            <div className="flex flex-col items-center">
              <Image
                  src="/icons/trash.svg"
                  alt="Корзина"
                  width={25}
                  height={25}
                />
              <Link href="/cart" className="mt-[0.5rem] text-white text-[0.875rem] font-hauss font-medium opacity-50 hover:opacity-100">
                Корзина
              </Link>
            </div>
          </div>
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
            <SideMenu onClose={toggleMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
