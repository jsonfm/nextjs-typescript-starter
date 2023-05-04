import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProviderWrapper } from "@/auth";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthProviderWrapper>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </AuthProviderWrapper>
    );
}
