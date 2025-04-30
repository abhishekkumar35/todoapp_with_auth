import { NoteType } from "@/types"
import Delete from "./Delete"
import Edit from "./Edit"

export default function Note({ note }: { note: NoteType}) {
    // Format the timestamp for display
    const formattedDate = new Date(note.timestamp).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <div className="card mb-4 hover:shadow-lg transition-shadow duration-300">
            <div className="p-4">
                <div className="flex flex-col md:flex-row justify-between w-full">
                    <div className="flex-1 mb-3 md:mb-0">
                        <p className="text-gray-800 dark:text-gray-200 text-lg font-medium mb-2">{note.note}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{formattedDate}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Edit id={note.id} />
                        <Delete id={note.id}/>
                    </div>
                </div>
            </div>
        </div>
    )
}