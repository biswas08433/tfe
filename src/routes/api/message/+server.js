import { json } from '@sveltejs/kit';
import { saveMessage } from '$lib/database/db.js';

export async function POST({ request }) {
    const data = await request.json();
    try {
        // Save message to database
        const result = saveMessage(data);
        
        if (result.changes > 0) {
            return json({ 
                result: 'success',
                message: 'Contact form received and saved to database', 
                received: true 
            });
        } else {
            console.error('Failed to save message to database');
            return json({ 
                result: 'error',
                message: 'Failed to save your message', 
                received: false 
            }, { status: 500 });
        }
    } catch (error) {
        console.error('Error saving message:', error);
        return json({ 
            result: 'error',
            message: 'Server error processing your request', 
            received: false 
        }, { status: 500 });
    }
}