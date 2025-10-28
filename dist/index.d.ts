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
export declare function queryInlinkApi({ endpoint, url, apiToken }: QueryInlinkApiOptions): Promise<QueryInlinkApiResult>;
//# sourceMappingURL=index.d.ts.map