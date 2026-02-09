/**
 * Helper to build asset URLs that work correctly in both development and production.
 * In production (IC asset canister), assets are served from a base path that may differ from dev.
 * 
 * @param path - The asset path relative to /public (e.g., "/assets/generated/logo.png")
 * @returns The full URL to the asset
 */
export function assetUrl(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // In production, import.meta.env.BASE_URL will be set by Vite to the correct base path
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Remove trailing slash from base URL if present
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  
  return `${cleanBase}${normalizedPath}`;
}
