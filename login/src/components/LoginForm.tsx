'use client'

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export const LoginForm = () => {
    const searchParams = useSearchParams();
    const error  = searchParams.get('error');

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)

        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
        }
        
        signIn('credentials', {
            ...data,
            callbackUrl: '/dashboard',
        })
    }

    return (
        <form onSubmit={login} className="
        h-screen 
        flex 
        justify-center 
        items-center 
        bg-slate-600 
        px-5
        ">
            <div className="
                bg-white
                p-12 
                rounded-lg 
                w-96 
                max-w-full 
                flex 
                flex-col 
                justify-center 
                items-center
                gap-2
            ">
                <h2 className="font-bold text-xl mb-3 text-slate-500">Faça login</h2>
                <input
                    type="email"
                    className="input input-primary bg-white w-full"
                    placeholder="Email"
                    name="email"
                />
                <input
                    type="password"
                    className="input input-primary bg-white w-full"
                    placeholder="Senha"
                    name="password"
                />
                <button type="submit" className="btn btn-primary w-full text-white">Login</button>
            { error === "CredentialsSignin" && <p className="text-red-400">Erro no email ou password</p>}
            </div>
        </form>
    )
}