import { useState } from 'react';

export default function AddNote({onData}: {onData:(indianTime:string)=>void}) {
    const [note, setNote] = useState('');
    const [message, setMessage] = useState('');
    
   async function handleAddNote(){
        const newTimestamp = Date.now()
        const indianTime = new Date(newTimestamp).toLocaleString("en-US", {
            timeZone: "Asia/Kolkata",
            hour12: false
          });

        const noteNewData = {note:note, timestamp:indianTime}
       const res =  await fetch('/api/notes', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(noteNewData)
        })
        if(res.ok){
           
            setMessage('Note Added Successfully')
            setNote('')
            setTimeout(()=>{
                setMessage('')
            }
            , 3000)
            onData(indianTime)
        }
    }


    return <div className="flex justify-center w-full m-4">
        <div className="flex flex-row w-2xl">
            <div className="flex flex-col w-full border-2 rounded-2xl pt-3.5">
        <input type='text' placeholder="Add A Note"  className="w-full px-4  rounded-2xl focus:outline-none focus:ring-0" onChange={(e)=>{setNote(e.target.value)}}/>   
        </div>
        <button className="p-2 bg-gray-800 rounded m-2 px-14 rounded-2xl text-white" onClick={handleAddNote}>Add</button>
        </div>
        <p className='text-emerald-700'>{message}</p>
    </div>
}