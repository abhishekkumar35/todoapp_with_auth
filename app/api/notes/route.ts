import { NextResponse, NextRequest } from "next/server";
import { AddNoteJsonDB, GetNotesJsonDB, UpdateNoteJsonDB, DeleteNoteJsonDB } from '@/db/prisma-db';
import { getToken } from "next-auth/jwt";

// Helper function to get the user ID from the session
async function getUserId(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });
    if (!token || !token.email) {
        return null;
    }
    // Using email as userId since it's unique for each user
    return token.email;
}

export async function GET(req: NextRequest) {
    const userId = await getUserId(req);

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await GetNotesJsonDB(userId);

    if ('notes' in data) {
        const notes = data.notes;
        return NextResponse.json({ notes });
    } else {
        return NextResponse.json({ error: data.error || "Unknown error" });
    }
}

export async function POST(req: NextRequest) {
    const userId = await getUserId(req);

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const noteData = await req.json();

    if (!noteData) {
        return NextResponse.json({ success: false, status: 400, message: "Invalid note data" });
    }

    // Add userId to the note
    const noteWithUser = { ...noteData, userId };

    const response = await AddNoteJsonDB(noteWithUser);

    if ('error' in response) {
        return NextResponse.json({ success: false, status: 500, message: response.error });
    }

    return NextResponse.json({
        success: true,
        status: 200,
        message: "Note added successfully",
        note: response.note
    });
}

export async function DELETE(req: NextRequest) {
    const userId = await getUserId(req);

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();
    const res = await DeleteNoteJsonDB(data.id, userId);

    return NextResponse.json(res);
}

export async function PUT(req: NextRequest) {
    const userId = await getUserId(req);

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();
    const { id, note } = data;

    const res = await UpdateNoteJsonDB(id, note, userId);

    return NextResponse.json(res);
}


