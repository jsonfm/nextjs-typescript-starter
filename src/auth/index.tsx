import { useIsBrowser } from "@/hooks/useIsBrowser";
import dynamic from "next/dynamic";

const testVariable = "dad";

const AuthProvider = dynamic(
  () => import("react-auth-kit").then((m) => m.AuthProvider),
  {
    ssr: false,
  }
);

interface AuthProviderWrapperProps {
  children: React.ReactNode;
}

export const AuthProviderWrapper: React.FC<AuthProviderWrapperProps> = ({
  children,
}) => {
  const { isBrowser } = useIsBrowser();

  if (isBrowser) {
    return (
      <AuthProvider
        authType={"localstorage"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}
      >
        {children}
      </AuthProvider>
    );
  } else {
    return <>{children}</>;
  }
};
