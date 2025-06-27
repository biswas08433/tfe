// Simple authentication system for admin routes
import { redirect } from '@sveltejs/kit';

// In a real application, this should be stored securely in an environment variable
// or a secure database with proper hashing
const ADMIN_PASSWORD = 'travel-trek-admin-2025';

// Check if the user is authenticated
export function requireAuth(cookies) {
    const authToken = cookies.get('admin_auth');
    
    if (!authToken || authToken !== ADMIN_PASSWORD) {
        throw redirect(302, '/admin/login');
    }
    
    return true;
}

// Authenticate a user with password
export function authenticate(password) {
    return password === ADMIN_PASSWORD;
}
