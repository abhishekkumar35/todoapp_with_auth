import { NextResponse, NextRequest } from "next/server";
import { AddNoteJsonDB,GetNotesJsonDB,UpdateNoteJsonDB,DeleteNoteJsonDB } from '@/db/db';

export async function GET() {
    const data = GetNotesJsonDB();
    if ('notes' in data) {
        const notes = data.notes;
        return NextResponse.json({ notes });
    } else {
        return NextResponse.json({ error: data || "Unknown error" });
    }
    
}


export async function POST(req:NextRequest){
    const note = await req.json();
    if (!note) {
        return NextResponse.json({ success: false, status: 400, message: "Invalid note data" });
    }
    const response = AddNoteJsonDB(note)
    if ('error' in response) {
        return NextResponse.json({ success: false, status: 500, message: response.error });
    }
    return NextResponse.json({ success: true, status: 200, message: `Note ${note} added successfully` });
   
}

export async function DELETE(req:NextRequest){
    const data = await req.json()
    console.log(data.id)
    const res = DeleteNoteJsonDB(data.id)
    return NextResponse.json(res)
}


export async function PUT(req:NextRequest){
    const data = await req.json()
    console.log("from PUT",data)
    const {id,note} = data
    const res = UpdateNoteJsonDB(id,note)
    return NextResponse.json(res)
}


