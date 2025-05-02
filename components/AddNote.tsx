import { useState } from 'react';

export default function AddNote({onData}: {onData:(indianTime:string)=>void}) {
    const [note, setNote] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleAddNote() {
        if (!note.trim()) return;

        try {
            setIsSubmitting(true);
            const newTimestamp = new Date().toISOString();

            const noteNewData = {
                note: note.trim(),
                timestamp: newTimestamp
            };

            const res = await fetch('/api/notes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(noteNewData)
            });

            if (!res.ok) {
                // Handle unauthorized or other errors
                if (res.status === 401) {
                    setMessage('You need to be signed in to add notes.');
                } else {
                    setMessage('Failed to add note. Please try again.');
                }
                setTimeout(() => {
                    setMessage('');
                }, 3000);
                return;
            }

            const data = await res.json();

            if (data.error) {
                setMessage(data.error);
                setTimeout(() => {
                    setMessage('');
                }, 3000);
                return;
            }

            if (data.success) {
                setMessage('Note added successfully!');
                setNote('');
                setTimeout(() => {
                    setMessage('');
                }, 3000);
                onData(newTimestamp);
            } else {
                setMessage(data.message || 'Failed to add note. Please try again.');
                setTimeout(() => {
                    setMessage('');
                }, 3000);
            }
        } catch (error) {
            console.error("Error adding note:", error);
            setMessage('An error occurred. Please try again.');
            setTimeout(() => {
                setMessage('');
            }, 3000);
        } finally {
            setIsSubmitting(false);
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !isSubmitting) {
            handleAddNote();
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
            <div className="card p-3 sm:p-4 mb-2">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">Add New Note</h2>

                <div className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="text"
                        placeholder="What's on your mind?"
                        className="input flex-grow py-2 px-3 sm:px-4 text-base"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={isSubmitting}
                    />

                    <button
                        className="btn btn-primary flex items-center justify-center min-w-[100px] py-2 sm:py-2.5 mt-1 sm:mt-0"
                        onClick={handleAddNote}
                        disabled={isSubmitting || !note.trim()}
                    >
                        {isSubmitting ? (
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            <span>Add Note</span>
                        )}
                    </button>
                </div>

                {message && (
                    <div className={`mt-3 text-sm font-medium ${message.includes('success') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
}