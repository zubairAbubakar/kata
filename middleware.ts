export { default } from 'next-auth/middleware';

export const config = {
    matcher: ['/trip', '/favorites', '/properties', '/reservations'],
};
