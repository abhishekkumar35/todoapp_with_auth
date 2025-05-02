import { useChange } from "@/hooks/useChange"
import { useState } from "react"

export default function Delete({id}: {id: string}) {
    const {setChange} = useChange()
    const [isDeleting, setIsDeleting] = useState(false)

    const handleDelete = async (id:string) =>{
        try {
            setIsDeleting(true)
            const res = await fetch("/api/notes", {
                method:"DELETE",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({id})
            })

            if (!res.ok) {
                if (res.status === 401) {
                    console.error("Unauthorized: You need to be signed in to delete notes")
                } else {
                    console.error("Failed to delete note")
                }
                return
            }

            const data = await res.json()

            if (data.error) {
                console.error("Error:", data.error)
                return
            }

            if (data.success) {
                console.log("Deleted successfully")
                setChange({del_id: id.toString(), edit_id:id.toString()})
            }
        } catch (error) {
            console.error("Error deleting note:", error)
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <button
            className="btn btn-danger flex items-center justify-center min-w-[70px] sm:min-w-[80px] text-sm sm:text-base py-1.5 sm:py-2"
            onClick={() => handleDelete(id)}
            disabled={isDeleting}
            aria-label="Delete note"
        >
            {isDeleting ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : (
                <span>Delete</span>
            )}
        </button>
    )
}