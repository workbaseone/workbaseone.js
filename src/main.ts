
import { ENDPOINTS, ReqBody } from "./constants";

/**
 * WorkbaseONE Main client
 */
 export default class Main {
    private readonly token: string;
    private readonly project: string;
  
    /**
     * Construct a new LogSnag instance
     * @param token LogSnag API token
     * @param project LogSnag project name
     * for more information, see: docs.logsnag.com
     */
    constructor({ token, project }: { token: string; project: string }) {
      this.token = token;
      this.project = project;
    }
  
    /**
     * Get project name
     * @returns project name
     */
    getProject(): string {
      return this.project;
    }
  
    /**
     * Creates authorization header
     * @returns Authorization header value
     */
    private createAuthorizationHeader(): string {
      return `Bearer ${this.token}`;
    }
  
    /**
     * Publish a new event to LogSnag
     * @param options
     * @returns true when successfully published
     */
    public async publish(options: ReqBody): Promise<boolean> {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: this.createAuthorizationHeader()
      };
  
      const method = 'POST';
      const body = JSON.stringify({
        ...options,
        project: this.getProject()
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