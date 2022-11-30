import { Stream } from "./constants";
/**
 * WorkbaseONE Main client
 */
export default class WorkbaseONE {
    private readonly token;
    /**
     * Construct a new instance
     * @param token workbaseONE API token -  go to settings/apps/<your_app>/<your_block>
     */
    constructor({ token }: {
        token: string;
    });
    /**
     * Creates authorization header
     * @returns Authorization header value
     */
    private createAuthorizationHeader;
    /**
     * Send streams to workbaseONE
     * @param options
     * @returns true when request is successfull
     */
    publish(options: Stream): Promise<boolean>;
}
export declare class HTTPResponseError extends Error {
    readonly status: number;
    readonly statusText: string;
    readonly body: any | undefined;
    constructor(status: number, statusText: string, body: any | undefined);
    /**
     * Get Error Info as JSON
     */
    toJSON(): {
        status: number;
        statusText: string;
        message: any;
        body: any;
    };
}
