"use client"
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

export default function Navbar() {
    const { data: session, status } = useSession()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Show nothing during initial load to prevent hydration mismatch
    if (status === 'loading') {
        return null;
    }

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">NotesApp</span>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <Link
                            href="/dashboard"
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/princing"
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/about"
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                            About
                        </Link>

                        {status === 'authenticated' ? (
                            <div className="flex items-center ml-4 space-x-2">
                                <div className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700">
                                    {session?.user?.name}
                                </div>
                                <Link
                                    href="/auth/signout"
                                    className="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                                >
                                    Sign out
                                </Link>
                            </div>
                        ) : (
                            <Link
                                href="/auth/signin"
                                className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                            >
                                Sign in
                            </Link>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed */}
                            <svg
                                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Icon when menu is open */}
                            <svg
                                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        href="/dashboard"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/princing"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/about"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        About
                    </Link>

                    {status === 'authenticated' ? (
                        <div className="space-y-2 pt-2">
                            <div className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700">
                                {session?.user?.name}
                            </div>
                            <Link
                                href="/auth/signout"
                                className="block w-full px-3 py-2 rounded-md text-base font-medium text-center text-white bg-blue-600 hover:bg-blue-700"
                            >
                                Sign out
                            </Link>
                        </div>
                    ) : (
                        <Link
                            href="/auth/signin"
                            className="block w-full mt-2 px-3 py-2 rounded-md text-base font-medium text-center text-white bg-blue-600 hover:bg-blue-700"
                        >
                            Sign in
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    )
}