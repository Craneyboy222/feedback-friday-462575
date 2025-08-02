/* User types */

/**
 * Interface representing a user profile.
 */
export interface UserProfile {
  id: number;
  username: string;
  email: string;
  profileInfo: string;
}

/**
 * Interface for user registration details.
 */
export interface UserRegistration {
  username: string;
  email: string;
  password: string;
}

/**
 * Interface for user authentication details.
 */
export interface UserCredentials {
  email: string;
  password: string;
}