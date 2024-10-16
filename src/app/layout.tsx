import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Guitar Note Trainer',
    description: 'guitar note trainer to memorize the fretboard',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <title>guitarsim</title>
                <meta name="description" content="a guitar simulator" />
                <meta name="author" content="gehsekky" />

                <meta property="og:title" content="guitarsim" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="a guitar simulator" />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
