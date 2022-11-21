const WORKBASEONE_API = 'https://app.workbaseone.com';

export const ENDPOINTS = {
   STREAM: `${WORKBASEONE_API}/v1/accounts`,
}

/**
 * Stream request body
 */
 export interface Stream {
    /**
     * Block name
     * example: "contacts"
     */
    block_name: string;
  
    /**
     * Stream name
     * example: "User signed in"
     */
    stream_name: string;
  
    /**
     * Stream description
     * example: "Matt signed in using the google sso"
     */
    stream_description?: string;
  
    /**
     * Stream icon (emoji)
     * example: "🎉"
     */
    stream_icon?: string;
  }