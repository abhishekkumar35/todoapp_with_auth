"use client"
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export default function Navbar() {
    const { data: session, status } = useSession()

    // Show nothing during initial load to prevent hydration mismatch
    if (status === 'loading') {
        return null;
    }

    return (
        <div className="navbar bg-gray-200 p-4">
            <ul className="flex justify-between w-full">
                <li className="mx-4 m-2"><Link href="/">Logo</Link></li>
                <li>
                    <ul className="flex justify-between">
                        <li className="m-2 flex">
                            <Link
                                href="/dashboard"
                                className=" hover:bg-gray-700 p-2 rounded"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li className="m-2 flex">
                            <Link href="/princing" className="hover:bg-gray-700 p-2 rounded">
                                Pricing
                            </Link>
                        </li>
                        <li className="m-2 flex">
                            <Link href="/about" className="hover:bg-gray-700 p-2 rounded">
                                About
                            </Link>
                        </li>
                        <li className="m-2 border-2 border-gray-600 rounded">
                            {status === 'authenticated' ? (
                                <div className="flex">
                                    {session?.user?.name && (
                                        <span className="p-2">{session.user.name}</span>
                                    )}
                                    <Link href="/auth/signout"
                                      
                                        className="hover:bg-gray-700 rounded p-2"
                                    >

                                        Sign out
                                    </Link>
                                </div>
                            ) : (
                                <Link
                                    href="/auth/signin"
                                    className="hover:bg-gray-700 p-2 rounded"
                                >
                                    Sign in
                                </Link>
                            )}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}