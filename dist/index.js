/**
 * Queries the inlink API for page metadata.
 *
 * @param options {QueryInlinkApiOptions} - The query options (endpoint, url to scrape, and optional apiToken)
 * @returns A Promise resolving to query result
 */
export async function queryInlinkApi({ endpoint, url, apiToken }) {
    const fullUrl = `${endpoint.replace(/\/$/, "")}?url=${encodeURIComponent(url)}`;
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
