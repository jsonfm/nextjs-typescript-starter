
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProviderWrapper } from '@/auth';


export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthProviderWrapper>
            <Component {...pageProps} />
        </AuthProviderWrapper>
    );
}