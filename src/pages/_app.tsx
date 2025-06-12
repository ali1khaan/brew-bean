import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { OrderProvider } from '@/context/OrderContext';
import dynamic from 'next/dynamic';
import Script from 'next/script'; 

const ToasterClient = dynamic(() => import('@/components/ToasterClient'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OrderProvider>
      {/* ✅ Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-NHPY304SEZ"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NHPY304SEZ');
          `,
        }}
      />
      {/* ✅ Your app content */}
      <Component {...pageProps} />
      <ToasterClient />
    </OrderProvider>
  );
}
