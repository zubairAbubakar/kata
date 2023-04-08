import { Inter } from 'next/font/google';
import Navbar from './components/navbar/Navbar';

import './globals.css';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import SigninModal from './components/modals/SigninModal';
import getCurrentUser from './actions/getCurrentUser';

export const metadata = {
    title: 'Airbnb',
    description: 'Airbnb Clone',
};

const font = Inter({
    subsets: ['latin'],
});

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const currentUser = await getCurrentUser();

    return (
        <html lang="en">
            <body className={font.className}>
                <ClientOnly>
                    <ToasterProvider />
                    <SigninModal />
                    <RegisterModal />
                    <Navbar currentUser={currentUser} />
                </ClientOnly>
                {children}
            </body>
        </html>
    );
}
