import React from 'react';
import { useSignIn } from 'react-auth-kit';
import { userService } from '@/services/user.service';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    const signIn = useSignIn();

    const onSubmit = async () => {
        const { user, token } = await userService.login("email@example.com", "password");
        const response = signIn({
            token,
            tokenType: `Bearer`,
            authState: user,
            expiresIn: 3600
        });
        if(!!response){
            router.push("/")
        }else{
            alert("Error during login!")
        }
    }

    return (
        <div>
            <button onClick={onSubmit}>Login</button>
        </div>
    )
};

export default Login;
