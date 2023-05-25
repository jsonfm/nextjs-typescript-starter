import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string;
    password: string;
};

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const router = useRouter();

    const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
        try {
            const response = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (response?.error) throw new Error(response?.error);
            if (!!response?.ok) {
                router?.push("/panel");
            }
        } catch (error: any) {
            console.log("error: ", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>email</label>
                    <input type="email" {...register("email")} />
                </div>
                <div>
                    <label>passwordl</label>
                    <input type="password" {...register("password")} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
