// This script migrates data from the local JSON file to MongoDB
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function migrateData() {
  try {
    // Read the JSON file
    const jsonPath = path.join(process.cwd(), 'db', 'db.json');
    const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    
    console.log(`Found ${jsonData.notes.length} notes in JSON file`);
    
    // Migrate each note to MongoDB
    let migratedCount = 0;
    
    for (const note of jsonData.notes) {
      // Check if note already exists
      const existingNote = await prisma.note.findFirst({
        where: {
          note: note.note,
          userId: note.userId,
        },
      });
      
      if (!existingNote) {
        await prisma.note.create({
          data: {
            note: note.note,
            timestamp: new Date(note.timestamp),
            userId: note.userId,
          },
        });
        migratedCount++;
      }
    }
    
    console.log(`Successfully migrated ${migratedCount} notes to MongoDB`);
  } catch (error) {
    console.error('Error migrating data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

migrateData();
