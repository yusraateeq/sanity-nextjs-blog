"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-950 text-white py-4 shadow-md border-b-2 border-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">
          <Link href="/">My Blog</Link>
        </h1>

        <nav className="flex items-center space-x-10">
          <ul className="hidden md:flex space-x-10">
            <li>
              <Link href="/" className="text-lg hover:text-blue-200 transition-all">Home</Link>
            </li>
            <li>
              <Link href="/About" className="text-lg hover:text-blue-200 transition-all">About</Link>
            </li>
            <li>
              <Link href="/Contact" className="text-lg hover:text-blue-200 transition-all">Contact</Link>
            </li>
          </ul>

          <button 
            className="md:hidden flex items-center space-x-2"
            onClick={toggleMenu}
          >
            <span className="text-2xl">☰</span>
          </button>

        </nav>
      </div>

      <div 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} relative top-0 left-0 w-full bg-blue-950 p-6 flex flex-col items-center space-y-6`}
      >
        <ul className="text-white text-xl space-y-6">
          <li>
            <Link href="/" className="hover:text-blue-200 transition-all" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link href="/About" className="hover:text-blue-200 transition-all" onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:text-blue-200 transition-all" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
