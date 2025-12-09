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
    /** Data signature hash for cache validation */
    data_signature: string;
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
export declare function isInlinkApiSuccessResponse(data: InlinkApiResponseData): data is InlinkApiSuccessResponse;
/**
 * Type guard to check if the API response is an error response
 */
export declare function isInlinkApiErrorResponse(data: InlinkApiResponseData): data is InlinkApiErrorResponse;
/**
 * Queries the inlink API for page metadata.
 *
 * @param options {QueryInlinkApiOptions} - The query options (endpoint, url to scrape, and optional apiToken)
 * @returns A Promise resolving to query result
 */
export declare function queryInlinkApi({ url, apiToken }: QueryInlinkApiOptions): Promise<QueryInlinkApiResult>;
//# sourceMappingURL=index.d.ts.map