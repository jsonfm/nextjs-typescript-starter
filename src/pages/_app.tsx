import "@/styles/globals.css";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { Layout } from "@/components/Layout";
import { SessionProvider } from "next-auth/react";
import { AuthRequired } from "@/auth/components";

interface CustomAppProps {
    Component: any;
    pageProps: any;
}

export default function App({ Component, pageProps }: CustomAppProps) {
    return (
        <SessionProvider session={pageProps?.session}>
            <Provider store={store}>
                <Layout>
                    {!!Component?.auth && (
                        <AuthRequired>
                            <Component {...pageProps} />
                        </AuthRequired>
                    )}
                    {!Component?.auth && <Component {...pageProps} />}
                </Layout>
            </Provider>
        </SessionProvider>
    );
}
