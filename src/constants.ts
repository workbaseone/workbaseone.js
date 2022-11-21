const WORKBASEONE_API = 'https://api.workbaseone.com';

export const ENDPOINTS = {
   STREAM: `${WORKBASEONE_API}/v1/accounts`,
}

/**
 * Options for publishing LogSnag events
 */
 export interface ReqBody {
    /**
     * Channel name
     * example: "waitlist"
     */
    channel: string;
  
    /**
     * Event name
     * example: "User Joined"
     */
    event: string;
  
    /**
     * Event description
     * example: "joe@example.com joined waitlist"
     */
    description?: string;
  
    /**
     * Event icon (emoji)
     * must be a single emoji
     * example: "🎉"
     */
    icon?: string;
  
    
  
    /**
     * Send push notification
     */
    notify?: boolean;
  
  }