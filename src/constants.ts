const WORKBASEONE_API = 'https://app.workbaseone.com';
const WORKBASEONE_LOCAL = 'http://localhost:3000';

export const ENDPOINTS = {
   STREAM: `${WORKBASEONE_LOCAL}/v1/streams`,
}

/**
 * Stream request body
 */
 export interface Stream {
    /**
     * Block
     * example: "contacts"
     */
    block: string;
  
    /**
     * name
     * example: "User signed in"
     */
    name: string;
  
    /**
     * description
     * example: "Matt signed in using the google sso"
     */
    description?: string;
  
    /**
     * icon (emoji)
     * example: "🧲"
     */
    icon?: string;

    /**
     * tags
     * example: "[`bingo`,`email:sankar@gmail.com`]"
     * email prefix will make the event assigned under the contact if exists
     */
    tags?: string[];
  }