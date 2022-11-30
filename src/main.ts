
import { ENDPOINTS, Stream } from "./constants";
require('isomorphic-fetch');

/**
 * WorkbaseONE Main client
 */
 export default class WorkbaseONE {
    private readonly token: string;
  
    /**
     * Construct a new instance
     * @param token workbaseONE API token -  go to settings/apps/<your_app>/<your_block>
     */
    constructor({ token }: { token: string; }) {
      this.token = token;
    }
  
    /**
     * Creates authorization header
     * @returns Authorization header value
     */
    private createAuthorizationHeader(): string {
      return `Bearer ${this.token}`;
    }
  
    /**
     * Send streams to workbaseONE
     * @param options
     * @returns true when request is successfull
     */
    public async publish(options: Stream): Promise<boolean> {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: this.createAuthorizationHeader()
      };
  
      const method = 'POST';
      const body = JSON.stringify({
        ...options,
      });
  
      const response = await fetch(ENDPOINTS.STREAM, { method, body, headers });
      if (!response.ok) {
        throw new HTTPResponseError(
          response.status,
          response.statusText,
          await response.json()
        );
      }
  
      return true;
    }
  }


  export class HTTPResponseError extends Error {
    public readonly status: number;
    public readonly statusText: string;
    public readonly body: any | undefined;
  
    constructor(status: number, statusText: string, body: any | undefined) {
      super(`HTTP Error Response: ${status} ${statusText}`);
      this.status = status;
      this.statusText = statusText;
      this.body = body;
    }
  
    /**
     * Get Error Info as JSON
     */
    toJSON() {
      return {
        status: this.status,
        statusText: this.statusText,
        message: this.body && this.body.message ? this.body.message : undefined,
        body: this.body
      };
    }
  
  }