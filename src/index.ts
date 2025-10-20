export interface QueryInlinkApiOptions {
  /** The deployed URL for the inlink API endpoint, including protocol (https). */
  endpoint: string;
  /** The target URL to scrape metadata from */
  url: string;
  /** Optional API token for authentication (as a bearer or in header) */
  apiToken?: string;
}

export interface QueryInlinkApiResult {
  status: number;
  data: unknown;
}

/**
 * Queries the inlink API for page metadata.
 *
 * @param options {QueryInlinkApiOptions} - The query options (endpoint, url to scrape, and optional apiToken)
 * @returns A Promise resolving to query result
 */
export async function queryInlinkApi({ endpoint, url, apiToken }: QueryInlinkApiOptions): Promise<QueryInlinkApiResult> {
  const fullUrl = `${endpoint.replace(/\/$/, "")}?url=${encodeURIComponent(url)}`;
  const headers: Record<string, string> = {
    'content-type': 'application/json',
  };
  if (apiToken) {
    headers['Authorization'] = `Bearer ${apiToken}`;
  }

  const response = await fetch(fullUrl, { headers });
  const data = await response.json();
  return { status: response.status, data };
}
