'use client'

import { signOut } from "next-auth/react"

export const LogoutComponent = () => {
    return (
        <button 
            className="btn btn-outline"
            onClick={() => signOut()}
        >
            Sair
        </button>
    )
}