import Link from 'next/link';
import React from 'react';

const Header: React.FC = ()=> {
  return (
    <header className="w-full bg-gray-900 text-white py-4 px-8 flex items-center justify-between shadow-md">
      <Link href="/">
        <h1  className="text-2xl font-bold tracking-tight">Gerenciamento Hexagonal</h1>
      
      </Link>
      <nav>
        <Link href="/proposta" className="text-white hover:text-gray-300 transition-colors">Propostas</Link>
      </nav>
    </header>
  );
}

export default Header;