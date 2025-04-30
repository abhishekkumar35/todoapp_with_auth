import { NextResponse, NextRequest } from "next/server";
import { migrateNotesToMongoDB } from '@/db/prisma-db';
import fs from 'fs';
import path from 'path';
import { getToken } from "next-auth/jwt";

// This endpoint is for migrating data from JSON to MongoDB
// It should only be called once during setup or by an admin
export async function POST(req: NextRequest) {
    // Check if the user is authenticated and has admin privileges
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });
    if (!token || !token.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    try {
        // Read the JSON file
        const jsonPath = path.join(process.cwd(), 'db', 'db.json');
        const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        
        // Migrate the data
        const result = await migrateNotesToMongoDB(jsonData.notes);
        
        if ('error' in result) {
            return NextResponse.json({ 
                success: false, 
                message: `Failed to migrate data: ${result.error}` 
            }, { status: 500 });
        }
        
        return NextResponse.json({ 
            success: true, 
            message: `Successfully migrated ${result.count} notes to MongoDB` 
        });
    } catch (error) {
        console.error('Error in migration endpoint:', error);
        return NextResponse.json({ 
            success: false, 
            message: `Error: ${error instanceof Error ? error.message : String(error)}` 
        }, { status: 500 });
    }
}
