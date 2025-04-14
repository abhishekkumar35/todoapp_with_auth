"use client";

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'  // Changed from next/router
import { signOut } from 'next-auth/react'

export default function SignOut() {
    const router = useRouter()

    useEffect(() => {
        const handleSignOut = async () => {
            await signOut({ redirect: false });
            router.push('/');
        }
        
        handleSignOut();
    }, [router])

    return (
        <></>
    );
}