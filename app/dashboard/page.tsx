"use client"
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { ChangeType } from '@/types';
import AddNote from '@/components/AddNote';
import NoteList from '@/components/NoteList';
import ChangeContext from '@/lib/ChangeContextProvider';

export default function Page() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            window.location.href = '/auth/signin';
        }
    });

    const [noteAdded, setNoteAdded] = useState<string>("")
    const [change, setChange] = useState<ChangeType>()

    if (status === "loading") {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
                <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-[calc(100vh-4rem)]">
            <div className="max-w-7xl mx-auto py-4 sm:py-6 px-3 sm:px-6 lg:px-8">
                <div className="px-0 sm:px-0 py-4 sm:py-6">
                    <div className="mb-4 sm:mb-8">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
                        <p className="mt-1 sm:mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Welcome, {session?.user?.name || 'User'}! Manage your notes and stay organized.
                        </p>
                    </div>

                    <ChangeContext.Provider value={{change, setChange}}>
                        <div>
                            <AddNote onData={(data) => setNoteAdded(data)} />
                            <NoteList data={noteAdded} />
                        </div>
                    </ChangeContext.Provider>
                </div>
            </div>
        </div>
    );
}