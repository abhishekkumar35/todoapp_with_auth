import { NoteType } from "@/types"
import Delete from "./Delete"
import Edit from "./Edit"
import { useEffect } from "react"
export default function Note({ note }: { note: NoteType}) {

    return <div className="border-2 p-2 m-2 flex w-full md:w-3xl">
        <div className="flex flex-row justify-between w-full">
            <p className="">{note.note}</p>
            <div>
                <Edit id={note.id} />
                <Delete id={note.id}/>
            </div>
        </div>
    </div>
}