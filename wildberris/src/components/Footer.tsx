import React from 'react';
import Container from './Container';
import '../app/globals.css';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-200 h-[400px] w-full flex items-center justify-center mt-auto">
            <Container>
                <div className="w-full max-w-6xl grid grid-cols-5 gap-8 text-gray-600">
                    <div className="space-y-2">
                        <h3 className="font-black">Покупателям</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Вопросы и ответы</a></li>
                            <li><a href="#" className="hover:underline">Юридическая информация</a></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-black">Продавцам и партнёрам</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Продавать товары</a></li>
                            <li><a href="#" className="hover:underline">Открыть пункт выдачи</a></li>
                            <li><a href="#" className="hover:underline">Предложить помещение</a></li>
                            <li><a href="#" className="hover:underline">Развозить грузы</a></li>
                            <li><a href="#" className="hover:underline">Доставлять заказ</a></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-black">Наши проекты</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">WB Guru</a></li>
                            <li><a href="#" className="hover:underline">WB Stream</a></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-black">Компания</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">О нас</a></li>
                            <li><a href="#" className="hover:underline">Пресс-служба</a></li>
                            <li><a href="#" className="hover:underline">Контакты</a></li>
                            <li><a href="#" className="hover:underline">Вакансии</a></li>
                            <li><a href="#" className="hover:underline">Сообщить о мошенничестве</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-wrap justify-center w-400 h-300">
                        <img src="/qr1.svg" alt="QR Code" className="w-258 h-258" />
                        <div className="flex gap-3 mt-4">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center relative group">
                                <img src="/icons/iconvk.svg" alt="Icon vk" className="w-8 h-8 group-hover:hidden" />
                                <img src="/icons/iconvkh.svg" alt="Icon vkh" className="absolute w-9 h-9 group-hover:block hidden" />
                            </div>
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center relative group">
                                <img src="/icons/icongit.svg" alt="Icon git" className="w-8 h-8 group-hover:hidden" />
                                <img src="/icons/icongith.svg" alt="Icon gith" className="absolute w-9 h-9 group-hover:block hidden" />
                            </div>
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center relative group">
                                <img src="/icons/icontg.svg" alt="Icon tg" className="w-8 h-8 group-hover:hidden" />
                                <img src="/icons/icontgh.svg" alt="Icon tgh" className="absolute w-9 h-9 group-hover:block hidden" />
                            </div>
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center relative group">
                                <img src="/icons/iconyt.svg" alt="Icon yt" className="w-8 h-8 group-hover:hidden" />
                                <img src="/icons/iconyth.svg" alt="Icon yth" className="absolute w-9 h-9 group-hover:block hidden" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;