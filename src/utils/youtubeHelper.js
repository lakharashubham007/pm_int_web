/**
 * Converts various YouTube URL formats into a valid embed URL.
 * Supports:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 */
export function getYoutubeEmbedUrl(url) {
    if (!url) return "";

    // If it's already an embed URL, just return it
    if (url.includes('/embed/')) {
        // Ensure it doesn't have double parameters if we add autoplay later
        return url;
    }

    let videoId = "";

    try {
        if (url.includes('youtu.be/')) {
            // shortened format: https://youtu.be/VIDEO_ID
            videoId = url.split('youtu.be/')[1].split(/[?#]/)[0];
        } else if (url.includes('youtube.com/watch')) {
            // standard format: https://www.youtube.com/watch?v=VIDEO_ID
            const urlObj = new URL(url);
            videoId = urlObj.searchParams.get('v');
        } else if (url.includes('youtube.com/v/')) {
            // older format: https://www.youtube.com/v/VIDEO_ID
            videoId = url.split('/v/')[1].split(/[?#]/)[0];
        }
    } catch (e) {
        console.error("Error parsing YouTube URL:", e);
        return url; // Return original if parsing fails
    }

    if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
    }

    return url;
}
