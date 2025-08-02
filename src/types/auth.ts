/* Authentication types */

/**
 * Interface for JWT token payload.
 */
export interface JWTPayload {
  userId: number;
  email: string;
  exp: number;
}