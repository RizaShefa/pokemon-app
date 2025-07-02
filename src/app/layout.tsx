import { Metadata } from 'next';
import React from 'react';

import '@/styles/globals.css';
import '@/styles/colors.css';

import NavBar from '@/app/NavBar';
import { PokemonProvider } from '@/context/PokemonContext';

export const metadata: Metadata = {
  title: 'Pokemon App',
  description: 'Pokemon website   ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className='backgroundColor'>
        <NavBar />
        <PokemonProvider>{children}</PokemonProvider>
      </body>
    </html>
  );
}
