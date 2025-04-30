import prisma from '@/lib/prisma';
import { Note } from '@prisma/client';

export async function GetNotesJsonDB(userId: string) {
  try {
    if (!userId) {
      return { error: "User ID is required" };
    }

    const notes = await prisma.note.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        timestamp: 'desc',
      },
    });

    return { notes };
  } catch (error) {
    console.error("Error fetching notes:", error);
    return { error: error instanceof Error ? error.message : String(error) };
  }
}

export async function AddNoteJsonDB(noteData: { note: string; timestamp: string; userId: string }) {
  try {
    if (!noteData.userId) {
      return { error: "User ID is required" };
    }

    const newNote = await prisma.note.create({
      data: {
        note: noteData.note,
        timestamp: new Date(noteData.timestamp),
        userId: noteData.userId,
      },
    });

    return {
      success: true,
      message: "Note added successfully",
      note: {
        id: newNote.id,
        note: newNote.note,
        timestamp: newNote.timestamp.toISOString(),
        userId: newNote.userId
      }
    };
  } catch (error) {
    console.error("Error adding note:", error);
    return { error: error instanceof Error ? error.message : String(error) };
  }
}

export async function DeleteNoteJsonDB(id: string, userId: string) {
  try {
    if (!userId) {
      return { error: "User ID is required" };
    }

    // First check if the note exists and belongs to the user
    const note = await prisma.note.findUnique({
      where: {
        id: id,
      },
    });

    if (!note) {
      return { error: `Note with id ${id} not found` };
    }

    if (note.userId !== userId) {
      return { error: `You don't have permission to delete this note` };
    }

    // Delete the note
    await prisma.note.delete({
      where: {
        id: id,
      },
    });

    return { success: true, message: `Note with id ${id} deleted successfully` };
  } catch (error) {
    console.error("Error deleting note:", error);
    return { error: error instanceof Error ? error.message : String(error) };
  }
}

export async function UpdateNoteJsonDB(id: string, noteData: { note: string; timestamp: string }, userId: string) {
  try {
    if (!userId) {
      return { error: "User ID is required" };
    }

    // First check if the note exists and belongs to the user
    const note = await prisma.note.findUnique({
      where: {
        id: id,
      },
    });

    if (!note) {
      return { error: `Note with id ${id} not found` };
    }

    if (note.userId !== userId) {
      return { error: `You don't have permission to update this note` };
    }

    // Update the note
    const updatedNote = await prisma.note.update({
      where: {
        id: id,
      },
      data: {
        note: noteData.note,
        timestamp: new Date(noteData.timestamp),
      },
    });

    return {
      success: true,
      message: `Note with id ${id} updated successfully`,
      note: {
        id: updatedNote.id,
        note: updatedNote.note,
        timestamp: updatedNote.timestamp.toISOString(),
        userId: updatedNote.userId
      }
    };
  } catch (error) {
    console.error("Error updating note:", error);
    return { error: error instanceof Error ? error.message : String(error) };
  }
}

// Function to migrate existing notes from JSON to MongoDB
export async function migrateNotesToMongoDB(notes: any[]) {
  try {
    const migratedNotes = await Promise.all(
      notes.map(async (note) => {
        // Check if note already exists
        const existingNote = await prisma.note.findFirst({
          where: {
            note: note.note,
            userId: note.userId,
          },
        });

        if (!existingNote) {
          return prisma.note.create({
            data: {
              note: note.note,
              timestamp: new Date(note.timestamp),
              userId: note.userId,
            },
          });
        }
        return existingNote;
      })
    );

    return { success: true, count: migratedNotes.length };
  } catch (error) {
    console.error("Error migrating notes:", error);
    return { error: error instanceof Error ? error.message : String(error) };
  }
}
