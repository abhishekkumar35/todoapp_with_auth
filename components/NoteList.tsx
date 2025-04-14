import { NoteType } from "@/types"
import Note from "./Note"
import { useEffect , useState} from "react"
import { useChange } from "@/hooks/useChange"



export default function NoteList({data}:{data:string}) {
    const {change} = useChange()
    const [notelist, setNoteslist] = useState<NoteType[]>([])
    const [del_edit_change,setDel_Edit_Change] = useState<{edit_id:string,del_id:string}>()
    useEffect(()=>{
      async  function initialize(){
        const res = await fetch('/api/notes', { method:'GET'})
        const data = await res.json()
        console.log(data)
        setNoteslist(data.notes)
        console.log(data)
       }
     initialize()

    },[data,change])
   
    return <div className="flex justify-center">
      <div>
        {notelist.map(note => <Note key={note.id} note={note} />)}
        </div>
    </div>
}