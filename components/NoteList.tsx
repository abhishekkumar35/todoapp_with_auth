import { NoteType } from "@/types"
import Note from "./Note"
import { useEffect, useState } from "react"
import { useChange } from "@/hooks/useChange"

export default function NoteList({data}:{data:string}) {
    const {change} = useChange()
    const [notelist, setNoteslist] = useState<NoteType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchNotes() {
            try {
                setIsLoading(true)
                setError(null)

                const res = await fetch('/api/notes', { method: 'GET' })

                if (!res.ok) {
                    throw new Error('Failed to fetch notes')
                }

                const data = await res.json()

                if (data.notes) {
                    // Sort notes by timestamp, newest first
                    const sortedNotes = [...data.notes].sort((a, b) => {
                        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
                    })

                    setNoteslist(sortedNotes)
                } else {
                    setNoteslist([])
                }
            } catch (err) {
                console.error("Error fetching notes:", err)
                setError('Failed to load notes. Please try again later.')
            } finally {
                setIsLoading(false)
            }
        }

        fetchNotes()
    }, [data, change])

    if (isLoading) {
        return (
            <div className="w-full max-w-3xl mx-auto px-4">
                <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="w-full max-w-3xl mx-auto px-4">
                <div className="card p-6 text-center">
                    <div className="text-red-500 dark:text-red-400 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Error</h3>
                    <p className="text-gray-600 dark:text-gray-300">{error}</p>
                    <button
                        className="mt-4 btn btn-primary"
                        onClick={() => window.location.reload()}
                    >
                        Retry
                    </button>
                </div>
            </div>
        )
    }

    if (notelist.length === 0) {
        return (
            <div className="w-full max-w-3xl mx-auto px-4">
                <div className="card p-6 text-center">
                    <div className="text-blue-500 dark:text-blue-400 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No Notes Yet</h3>
                    <p className="text-gray-600 dark:text-gray-300">Add your first note to get started!</p>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full max-w-3xl mx-auto px-4 pb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Your Notes</h2>
            <div className="space-y-4">
                {notelist.map(note => (
                    <Note key={note.id} note={note} />
                ))}
            </div>
        </div>
    )
}