import { redirect } from '@sveltejs/kit';
import { requireAuth } from '$lib/auth.js';

export function load({ cookies }) {
    try {
        // Check if the user is authenticated
        requireAuth(cookies);
        
        // Redirect to messages page
        throw redirect(302, '/admin/messages');
    } catch (error) {
        // If not authenticated, the requireAuth function would have already redirected
        return { redirecting: true };
    }
}
