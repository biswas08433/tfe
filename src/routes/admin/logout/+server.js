import { redirect } from '@sveltejs/kit';

export function GET({ cookies }) {
    // Clear authentication cookie
    cookies.delete('admin_auth', { path: '/' });
    
    // Redirect to login page
    throw redirect(302, '/admin/login');
}
