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
              <div className="flex-shrink-0">
                <Link href="/">
                  <img
                    src="/logo.svg"
                    alt="Логотип"
                    className="h-[35px] w-[220px]"
                  />
                </Link>
              </div>
              <div className="ml-[20px] relative w-[55px] h-[55px] group">
              <div
                    className="w-full h-full rounded-[15px] border border-white opacity-35 group-hover:opacity-100 transition-opacity"
                    style={{ borderWidth: '1px' }}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-[25px] h-[3px] bg-white rounded-full" />
                    <div className="w-[25px] h-[3px] bg-white rounded-full mt-[6px]" />
                    <div className="w-[25px] h-[3px] bg-white rounded-full mt-[6px]" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    );
  };

export default Header;