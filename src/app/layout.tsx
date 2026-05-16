import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './youth-redesign.css';

export const metadata: Metadata = {
  title: 'Nitido',
  description:
    'NITIDO Barber Studio: barbería en Leganés especializada en cortes modernos, barba y estilo personalizado.',
  icons: {
    icon: '/assets/img/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body
        style={{
          backgroundImage:
            'linear-gradient(to bottom, #ffffff, #c2c2c7, #888893, #505361, #1d2434)',
        }}
      >
        {children}
        {/* <Script
          src="https://booksy.com/widget/code.js?id=124137&country=es&lang=es-ES"
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  );
}
