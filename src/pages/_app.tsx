import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { OrderProvider } from '@/context/OrderContext';
import dynamic from 'next/dynamic';

const ToasterClient = dynamic(() => import('@/components/ToasterClient'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OrderProvider>
      <Component {...pageProps} />
      <ToasterClient />
    </OrderProvider>
  );
}
