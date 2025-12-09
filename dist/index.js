const INLINK_API_URL = 'https://inlinkapi.com/';
/**
 * Type guard to check if the API response is a success response
 */
export function isInlinkApiSuccessResponse(data) {
    return 'formatted' in data && 'raw' in data;
}
/**
 * Type guard to check if the API response is an error response
 */
export function isInlinkApiErrorResponse(data) {
    return 'error' in data;
}
/**
 * Queries the inlink API for page metadata.
 *
 * @param options {QueryInlinkApiOptions} - The query options (endpoint, url to scrape, and optional apiToken)
 * @returns A Promise resolving to query result
 */
export async function queryInlinkApi({ url, apiToken }) {
    const fullUrl = `${INLINK_API_URL}/api?url=${encodeURIComponent(url)}`;
    const headers = {
        'content-type': 'application/json',
    };
    if (apiToken) {
        headers['Authorization'] = `Bearer ${apiToken}`;
    }
    const response = await fetch(fullUrl, { headers });
    const data = await response.json();
    return { status: response.status, data };
}
