import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import styles from './layout.module.css';
import './globals.css';

export const mont = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-mont',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${mont.className} ${styles.body}`}>
        <header className={styles.head}></header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}></footer>
      </body>
    </html>
  );
}
