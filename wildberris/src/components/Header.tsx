import React from 'react';
import Container from './Container';
import '../app/globals.css';

const Header: React.FC = () => {
    return (
        <header className="w-full bg-gradient-to-t from-[#FF49D6] via-[#E93FDD] to-[#9012F3]">
            <Container>
                <div className="flex items-center justify-between py-5">
                    <div className="flex items-center justify-between py-5">
                        <img src="/logo.svg" alt="Logo" width={220} height={40} className="h-auto"/>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;