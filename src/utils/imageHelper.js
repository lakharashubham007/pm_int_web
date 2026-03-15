export const getBackendUrl = () => {
    // If we're on the client side, construct the backend URL from the current hostname
    if (typeof window !== 'undefined') {
        const hostname = window.location.hostname;
        return `http://${hostname}:5000`;
    }
    
    // Server-side fallback
    return process.env.NEXT_PUBLIC_API_URL 
        ? process.env.NEXT_PUBLIC_API_URL.replace('/api', '').replace(/\/$/, '')
        : 'http://localhost:5000';
};

export function getImageUrl(imagePath) {
    if (!imagePath) return null;

    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        return imagePath;
    }

    const backendUrl = getBackendUrl();

    // If it already contains uploads, don't duplicate it
    if (imagePath.includes('uploads/')) {
        const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
        return `${backendUrl}${cleanPath}`;
    }

    // Default: it's just a filename from the hero section
    return `${backendUrl}/uploads/hero/${imagePath}`;
}
