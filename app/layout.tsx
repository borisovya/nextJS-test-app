import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import Header from './ components/Header';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Main Next App',
  description: 'Main next app page',
};

export default function RootLayout({children}: { children: React.ReactNode }) {

  return (
    <html lang="ru">
    <body className={inter.className}>
    <Header/>
    <div className='container'>{children}</div>
    </body>
    </html>
  );
}
