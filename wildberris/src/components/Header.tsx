import Link from 'next/link';
import React from 'react';
import Container from './Container';
import '../app/globals.css';

const Header: React.FC = () => {
    return (
      <header className="w-full h-[115px] bg-gradient-to-t from-[#FF49D6] via-[#E93FDD] to-[#9012F3]">
        <Container>
          <div className="flex items-center justify-between py-10">
            <div className="flex items-center">
              <div className="flex-shrink-0 transform -translate-y-1">
                <Link href="/">
                  <img
                    src="/logo.svg"
                    alt="Логотип"
                    className="h-[38px] w-[240px]"
                  />
                </Link>
              </div>
              <button className="ml-[18px] relative w-[60px] h-[60px] group appearance-none focus:outline-none">
              <div
                    className="w-full h-full rounded-[15px] border border-white opacity-35 group-hover:opacity-100 transition-opacity"
                    style={{ borderWidth: '1px' }}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-[25px] h-[3px] bg-white rounded-full" />
                    <div className="w-[25px] h-[3px] bg-white rounded-full mt-[6px]" />
                    <div className="w-[25px] h-[3px] bg-white rounded-full mt-[6px]" />
                </div>
              </button>

              <div className="ml-[12px] relative">
              <div className="absolute bottom-full ml-[10px] mb-[5px] flex items-center">
              <a
                  href="https://www.wildberries.ru/seller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[14px] font-sans font-medium opacity-50 hover:opacity-100"
                >
                  Продавайте на Wildberries
                </a>
                <a
                  href="https://www.wildberries.ru/career"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[14px] font-sans font-medium opacity-50 ml-[10px] hover:opacity-100"
                >
                  Работа в Wildberries
                </a>
              </div>
              
              <input
              type="text"
              placeholder="Найти на Wildberries"
              className="ml-[12px] w-[1020px] h-[60px] rounded-[17px] bg-white focus:outline-none px-4 text-black text-[17px] font-sans font-regular"
            />
            </div>
            </div>
            <div className="flex items-center">
            <a
              href="https://www.wildberries.ru/addresses"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[14px] font-normal hover:underline ml-[27px]"
            >
              Адреса
            </a>
            <a
              href="https://www.wildberries.ru/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[14px] font-normal hover:underline ml-[25px]"
            >
              Войти
            </a>
            <a
              href="https://www.wildberries.ru/cart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[14px] font-normal hover:underline ml-[25px]"
            >
              Корзина
            </a>
          </div>
          </div>
        </Container>
      </header>
    );
  };

export default Header;