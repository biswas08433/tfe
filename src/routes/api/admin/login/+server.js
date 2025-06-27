import { json } from '@sveltejs/kit';
import { authenticate } from '$lib/auth.js';

export async function POST({ request, cookies }) {
    const data = await request.json();
    const { password } = data;
    
    // Check if the password is correct
    if (authenticate(password)) {
        // Set authentication cookie
        cookies.set('admin_auth', password, {
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 // 24 hours
        });
        
        return json({ authenticated: true });
    }
    
    return json({ authenticated: false }, { status: 401 });
}
