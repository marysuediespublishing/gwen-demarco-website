/**
 * Parse a focal point string (e.g., "50,50") into X and Y values
 * Used for artwork thumbnail cropping with object-position CSS
 */
export function parseFocalPoint(focalPoint?: string | null): { x: number; y: number } {
  if (!focalPoint || typeof focalPoint !== 'string') {
    return { x: 50, y: 50 };
  }

  const parts = focalPoint.split(',');
  if (parts.length !== 2) {
    return { x: 50, y: 50 };
  }

  const x = parseInt(parts[0], 10);
  const y = parseInt(parts[1], 10);

  return {
    x: isNaN(x) ? 50 : Math.max(0, Math.min(100, x)),
    y: isNaN(y) ? 50 : Math.max(0, Math.min(100, y)),
  };
}

/**
 * Convert focal point to CSS object-position value
 */
export function focalPointToObjectPosition(focalPoint?: string | null): string {
  const { x, y } = parseFocalPoint(focalPoint);
  return `${x}% ${y}%`;
}

/**
 * Helper to handle both old (focal_x, focal_y) and new (focal_point) formats
 * for backwards compatibility during migration
 */
export function getObjectPosition(data: {
  focal_point?: string | null;
  focal_x?: number | null;
  focal_y?: number | null;
}): string {
  // Prefer the new combined field
  if (data.focal_point) {
    return focalPointToObjectPosition(data.focal_point);
  }

  // Fall back to old separate fields
  const x = data.focal_x ?? 50;
  const y = data.focal_y ?? 50;
  return `${x}% ${y}%`;
}
