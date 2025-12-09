const INLINK_API_URL = 'https://inlinkapi.com/'

/**
 * Formatted metadata response structure
 */
export interface InlinkFormattedMetadata {
  /** The site name */
  site_name?: string;
  /** The theme color (hex code) */
  theme_color?: string;
  /** The page title */
  title?: string;
  /** The page description */
  description?: string;
  /** The R2 URL of the processed image */
  image?: string;
  /** The R2 URL of the processed favicon */
  favicon?: string;
  /** Custom favicon URL if available */
  custom_favicon?: string;
  /** Whether to use custom favicon (true when custom_favicon is set and NOT "Custom.svg") */
  shouldUseCustomFavicon?: boolean;
  /** Data signature hash for cache validation */
  data_signature: string;
  /** Username extracted from URL or metadata (for social media platforms) */
  username?: string;
  /** Domain icon filename (e.g., "X.svg", "Instagram.svg") */
  domain_icon?: string;
}

/**
 * Raw metadata response structure
 */
export interface InlinkRawMetadata {
  /** OpenGraph title */
  title?: string;
  /** OpenGraph description */
  description?: string;
  /** OpenGraph image URL */
  image?: string;
  /** OpenGraph site name */
  site_name?: string;
  /** OpenGraph type */
  type?: string;
  /** OpenGraph URL */
  url?: string;
  /** Theme color */
  'theme-color'?: string;
  /** Additional metadata fields */
  [key: string]: string | undefined;
}

/**
 * Successful API response structure
 */
export interface InlinkApiSuccessResponse {
  /** Formatted metadata ready for use */
  formatted: InlinkFormattedMetadata;
  /** Raw metadata extracted from the page */
  raw: InlinkRawMetadata;
}

/**
 * Error API response structure
 */
export interface InlinkApiErrorResponse {
  /** Error message */
  error: string;
}

/**
 * API response data (success or error)
 */
export type InlinkApiResponseData = InlinkApiSuccessResponse | InlinkApiErrorResponse;

/**
 * Options for querying the inlink API
 */
export interface QueryInlinkApiOptions {
  /** The deployed URL for the inlink API endpoint, including protocol (https). */
  endpoint: string;
  /** The target URL to scrape metadata from */
  url: string;
  /** Optional API token for authentication (as a bearer or in header) */
  apiToken?: string;
}

/**
 * Result from querying the inlink API
 */
export interface QueryInlinkApiResult {
  /** HTTP status code */
  status: number;
  /** Response data (success or error) */
  data: InlinkApiResponseData;
}

/**
 * Type guard to check if the API response is a success response
 */
export function isInlinkApiSuccessResponse(
  data: InlinkApiResponseData
): data is InlinkApiSuccessResponse {
  return 'formatted' in data && 'raw' in data;
}

/**
 * Type guard to check if the API response is an error response
 */
export function isInlinkApiErrorResponse(
  data: InlinkApiResponseData
): data is InlinkApiErrorResponse {
  return 'error' in data;
}

/**
 * Queries the inlink API for page metadata.
 *
 * @param options {QueryInlinkApiOptions} - The query options (endpoint, url to scrape, and optional apiToken)
 * @returns A Promise resolving to query result
 */
export async function queryInlinkApi({ url, apiToken }: QueryInlinkApiOptions): Promise<QueryInlinkApiResult> {
  const fullUrl = `${INLINK_API_URL}api?url=${encodeURIComponent(url)}`;
  const headers: Record<string, string> = {
    'content-type': 'application/json',
  };
  if (apiToken) {
    headers['Authorization'] = `Bearer ${apiToken}`;
  }

  const response = await fetch(fullUrl, { headers });
  const data = await response.json() as InlinkApiResponseData;
  return { status: response.status, data };
}
