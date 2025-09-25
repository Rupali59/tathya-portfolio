/**
 * Utility functions for handling images in the application
 */

/**
 * Get the full path for a team member's profile image
 * @param imagePath - The relative path to the image
 * @returns The full path or null if not provided
 */
export const getTeamImagePath = (imagePath?: string): string | null => {
  if (!imagePath) return null;
  return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
};

/**
 * Get a fallback emoji for a team member
 * @param emoji - The emoji to use as fallback
 * @returns The emoji string
 */
export const getTeamImageFallback = (emoji: string): string => {
  return emoji;
};

/**
 * Check if an image path exists (for future use with API calls)
 * @param imagePath - The path to check
 * @returns Promise<boolean>
 */
export const imageExists = async (imagePath: string): Promise<boolean> => {
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

/**
 * Preload team images for better performance
 * @param imagePaths - Array of image paths to preload
 */
export const preloadTeamImages = (imagePaths: string[]): void => {
  imagePaths.forEach(path => {
    if (path) {
      const img = new Image();
      img.src = path;
    }
  });
};
