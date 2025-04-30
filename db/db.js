import fs from 'fs';
import path from 'path';

const DB_FILE = path.join(process.cwd(), 'db/db.json');
const db = { notes: [] };


function saveDB(db) {
  if (db.notes.length === 0) {
    return;
  }
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), "utf8");
};

function LoadDB() {
  const data = fs.readFileSync(DB_FILE, "utf8");
  const parsedDataFromDB = JSON.parse(data)
  return parsedDataFromDB;
}


function GetNotesJsonDB(userId) {
  try {
    const data = LoadDB();

    // If userId is provided, filter notes by userId
    if (userId) {
      const filteredNotes = data.notes.filter(note => note.userId === userId);
      return { notes: filteredNotes };
    }

    return data;
  } catch (error) {
    return { error: error.toString() }
  }
}

function AddNoteJsonDB(note) {
  try {
    if (!note.userId) {
      return { error: "User ID is required" };
    }

    const data = LoadDB();
    const id = data.notes.length + 1;
    const newNote = { id: id.toString(), ...note };
    data.notes.push(newNote);

    saveDB(data);

    return { success: true, message: `Note added successfully`, note: newNote };
  } catch (error) {
    return { error: error.toString() }
  }
}

function DeleteNoteJsonDB(id, userId) {
  try {
    const data = LoadDB();
    const index = data.notes.findIndex(note => note.id === id && note.userId === userId);

    if (index === -1) {
      return { error: `Note with id ${id} not found or you don't have permission to delete it` };
    }

    data.notes.splice(index, 1);
    saveDB(data);
    return { success: true, message: `Note with id ${id} deleted successfully` };
  } catch (error) {
    return { error: error.toString() };
  }
}




function UpdateNoteJsonDB(id, note, userId) {
  try {
    const parsednotes = LoadDB();

    // Make sure we only update notes that belong to the user
    const index = parsednotes.notes.findIndex(n => n.id === id && n.userId === userId);

    if (index === -1) {
      return { error: `Note with id ${id} not found or you don't have permission to update it` };
    }

    // Preserve the userId when updating
    const updatedNote = { ...note, userId };
    parsednotes.notes[index] = updatedNote;

    saveDB(parsednotes);
    return {
      success: true,
      message: `Note with id ${id} updated successfully`,
      note: updatedNote
    };
  } catch (error) {
    return { error: error.toString() };
  }
}



export { AddNoteJsonDB, GetNotesJsonDB, DeleteNoteJsonDB, UpdateNoteJsonDB };












