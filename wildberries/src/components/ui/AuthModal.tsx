"use client";

import React, { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('+7 ');
  const [isAgreed, setIsAgreed] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.startsWith('+7 ') && /^\+7 \d{0,10}$/.test(value)) {
      setPhone(value);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-30"
        onClick={onClose}
      />

      <div className="bg-white rounded-[15px] shadow-lg w-[360px] h-[290px] relative z-10 flex flex-col justify-center">
        <div className="p-6">
          <h2 className="text-xl font-hauss font-medium mb-4 text-center">Войти или создать профиль</h2>
          <form>
            <div className="mb-4">
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
                placeholder="+7 (XXX) XXX-XX-XX"
                maxLength={16}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#A232E8] text-white font-hauss font-medium py-2 px-4 rounded-md hover:bg-[#8A2BE2] focus:outline-none focus:ring-2 "
            >
              Получить код
            </button>

            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id="agreement"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="agreement" className="text-sm text-gray-700">
                Соглашаюсь с правилами пользования торговой площадкой и возврата
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;