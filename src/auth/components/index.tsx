import { useSession } from "next-auth/react";
import { ReactNode } from "react";

interface AuthRequiredProps {
    children: ReactNode;
}

export const AuthRequired = ({ children }: AuthRequiredProps) => {
    const { status } = useSession({ required: true });

    if (status === "loading") {
        return (
            <section className="pt-20 h-full w-full flex items-center justify-center" style={{ minHeight: "70vh" }}>
                <div className="min-h-[70vh] flex items-center justify-center">
                    <p>Loading...</p>
                </div>
            </section>
        );
    }

    return <>{children}</>;
};
