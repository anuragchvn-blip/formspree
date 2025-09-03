/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Waitlist submission request type
 */
export interface WaitlistSubmission {
  name: string;
  email: string;
  timestamp?: string;
}

/**
 * Waitlist submission response type
 */
export interface WaitlistResponse {
  success: boolean;
  message: string;
  data?: {
    name: string;
    email: string;
  };
  error?: string;
}
