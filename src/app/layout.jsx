import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import StyledComponentsRegistry from '../lib/StyledComponentsRegistry';
import Navbar from '../components/Navbar';
import GlobalStyle from '../styles/global';

export const metadata = {
  title: '3D&T - Defensores de Tóquio 3ª Edição',
  icons: { icon: '/logo-3det-alpha.png' },
  manifest: '/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Navbar />

          <div className="container container-ficha">
            <div className="ficha">{children}</div>
          </div>

          <GlobalStyle />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
