"use client";
import { NoteType } from "@/types";
import Modal from "./Modal"
import{useState} from "react"
import { useChange } from "@/hooks/useChange";


export default function Edit({id}:{id:string}) {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [editableData,setEditableData] = useState<NoteType | null>(null)
    const {change,setChange}=useChange();
    
   
   async function handleOpen() {
        setModalOpen(true)
        const res = await fetch(`/api/notes`,{method:"GET",headers:{"Content-Type":"application/json"}})
        const data = await res.json()
        console.log(data)
        const dataToEdit =  data.notes.filter((note:NoteType)=>{
            if(note.id === id){
                return note
            }
        })
        console.log(dataToEdit[0])
        setEditableData(dataToEdit[0] || null)
        console.log('Edit button clicked',id) 

         
    }
    async function handleClose(){
        setModalOpen(false)
        const res = await fetch("/api/notes",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id, note:editableData})})
        console.log(res)
        setChange({del_id:'0',edit_id:id})
    }

    
    return (
            <>
            <Modal isOpen={isModalOpen} onClose={handleClose} >
              
               
                <input
                    type="text" className="p-2 w-full h-24 bg-gray-300 text-black"
                    value={editableData?.note || ""}
                    onChange={(e) =>
                        editableData &&
                        setEditableData({ ...editableData, note: e.target.value, timestamp: Date.now().toLocaleString() })
                    }
                />
            </Modal>
            <button className="p-2 bg-gray-800 rounded m-2 px-14 rounded-2xl text-white" onClick={handleOpen}>Edit</button>
            </>
        )
}