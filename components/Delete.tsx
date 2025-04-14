import { useChange } from "@/hooks/useChange"

export default function Delete({id}: {id: string}) {
    const {setChange} = useChange()
    const handleDelete = async (id:string) =>{
        const res = await fetch("/api/notes", {
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({id})
            
        })
        if(res.ok){
            console.log("deleted successfully")
            setChange({del_id: id.toString(), edit_id:id.toString()})
            
        }
    }
    
    return <button className="bg-red-600 text-white p-2 rounded" onClick={() =>handleDelete(id)}>delete</button>

}