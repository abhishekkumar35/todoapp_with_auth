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


function GetNotesJsonDB() {
  try {
    const data = LoadDB()
   return data
  } catch (error) {
    return { error: error.toString() }
  }
}

function AddNoteJsonDB(note) {
  try {
    const data = LoadDB()
    const id = data.notes.length + 1;
    const newNote = { id: id, ...note }
    data.notes.push(newNote);

    saveDB(data);

    return { success: true, message: `Note ${note} added successfully` };
  } catch (error) {
    return { error: error.toString() }
  }
}

function DeleteNoteJsonDB(id) {
  try {
    const data = LoadDB()
    const index = data.notes.findIndex(note => note.id === id);
    if (index === -1) {
      return { error: `Note with id ${id} not found` }
    }
    data.notes.splice(index, 1);
    saveDB(data);
    return { success: true, message: `Note with id ${id} deleted successfully` }
  } catch (error) {
    return { error: error.toString() }
  }

}




function UpdateNoteJsonDB(id, note) {
  try {
    const parsednotes = LoadDB()
  
    const index = parsednotes.notes.findIndex(note => note.id === id);
    console.log("from UpdateNoteJson parsed editable note",  index)

    
    if (index === -1) {
      return { error: `Note with id ${id} not found` }
    }
    parsednotes.notes[index] = note;

    saveDB(parsednotes);
    return { success: true, message: `Note with id ${id} updated successfully` }
  } catch (error) {
    return { error: error.toString() }
  }

}



export { AddNoteJsonDB, GetNotesJsonDB, DeleteNoteJsonDB, UpdateNoteJsonDB };












