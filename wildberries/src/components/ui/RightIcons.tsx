import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface RightIconsProps {
  isZoom200: boolean;
  handleLoginClick: () => void;
}

const RightIcons: React.FC<RightIconsProps> = ({ isZoom200, handleLoginClick }) => {
  return (
    <div className="right-icons">
      <div className="flex flex-col items-center address">
        <Image
          src="/icons/address.svg"
          alt="Адрес"
          width={20}
          height={30}
        />
        {!isZoom200 && (
          <Link href="/addresses" className="mt-[0.5rem] text-white text-[0.875rem] font-hauss font-medium opacity-50 hover:opacity-100">
            Адреса
          </Link>
        )}
      </div>

      {!isZoom200 && (
        <>
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
        </>
      )}
    </div>
  );
};

export default RightIcons;