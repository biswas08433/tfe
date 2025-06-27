import { requireAuth } from '$lib/auth.js';

export function load({ cookies }) {
    // Check if the user is authenticated
    requireAuth(cookies);
    
    return {
        authenticated: true
    };
}
