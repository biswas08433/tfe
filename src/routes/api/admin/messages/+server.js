import { json } from '@sveltejs/kit';
import { getAllMessages, markMessageAsHandled } from '$lib/database/db.js';
import { requireAuth } from '$lib/auth.js';

export async function GET({ cookies }) {
    // Check if user is authenticated
    requireAuth(cookies);
    
    try {
        const messages = getAllMessages();
        return json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        return json([], { status: 500 });
    }
}

// Endpoint to mark a message as handled
export async function POST({ request, cookies }) {
    // Check if user is authenticated
    requireAuth(cookies);
    
    try {
        const { id } = await request.json();
        
        if (!id) {
            return json({ success: false, error: 'Message ID is required' }, { status: 400 });
        }
        
        const result = markMessageAsHandled(id);
        
        if (result.changes > 0) {
            return json({ success: true });
        } else {
            return json({ success: false, error: 'Message not found or already handled' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error marking message as handled:', error);
        return json({ success: false, error: 'Server error' }, { status: 500 });
    }
}
