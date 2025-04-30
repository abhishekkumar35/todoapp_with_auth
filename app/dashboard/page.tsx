"use client"
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { ChangeType } from '@/types';
import AddNote from '@/components/AddNote';
import NoteList from '@/components/NoteList';
import ChangeContext from '@/lib/ChangeContextProvider';



export default function Page() {
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            window.location.href = '/auth/signin';
        }
    });

    const [noteAdded, setNoteAdded] = useState<string>("")

    const [change, setChange] = useState<ChangeType>()


       if (status === "loading") {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

     return (
        <div>
            <ChangeContext.Provider value={{change, setChange}}>
            <div className=''>
                <div>
                    <AddNote onData={(data)=>{setNoteAdded(data)}}/>
                </div>
                <div className='text-center'>
                    <NoteList data={noteAdded}/>
                </div>
            </div>
            </ChangeContext.Provider>
        </div>
    );
}