'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Pokemon' },
    { href: '/trainers', label: 'My Team' },
  ];

  return (
    <header className='flex items-center maxLayout justify-center w-full py-4 text-white bg-gradient-to-r from-blue-500 via-purple-600 to-pink-400 shadow-lg'>
      <nav className='flex items-center gap-2'>
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`
                relative px-6 py-2 rounded-lg font-medium text-lg
                transition-all duration-300 ease-out cursor-pointer
                transform hover:scale-105 active:scale-95
                hover:bg-white/20 bg-white/30
                focus:outline-none focus:ring-2 focus:ring-white/50
                ${
                  isActive
                    ? 'bg-white/25 shadow-lg backdrop-blur-sm border border-white/40'
                    : 'hover:shadow-md'
                }
              `}
              >
                <div className='absolute inset-0 rounded-lg bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300' />

                <span className='relative z-10'>{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default NavBar;
