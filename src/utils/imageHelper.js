export const getBackendUrl = () => {
    return process.env.NEXT_PUBLIC_IMAGE_BASE_URL || 'http://localhost:5000';
};

export function getImageUrl(imagePath) {
    if (!imagePath) return null;

    // Already a full URL
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        return imagePath;
    }

    const backendUrl = getBackendUrl();

    // Normalize path to have leading slash but no double slashes when prepending backendUrl
    const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;

    // If it already contains uploads, just prepend the base URL
    if (imagePath.includes('uploads/')) {
        return `${backendUrl}${cleanPath}`;
    }

    // Special check for facility images
    if (imagePath.startsWith('facility_')) {
        return `${backendUrl}/uploads/facilities${cleanPath}`;
    }

    // Special check for hero, about, or gallery images
    if (imagePath.startsWith('hero_') || imagePath.startsWith('about_') || imagePath.startsWith('gallery_')) {
        return `${backendUrl}/uploads/hero${cleanPath}`;
    }

    // Default fallback: assume hero folder if just a filename
    return `${backendUrl}/uploads/hero${cleanPath}`;
}
