/* Error types */

/**
 * Interface for a generic error object.
 */
export interface AppError {
  name: string;
  message: string;
  stack?: string;
  statusCode?: number;
}

/**
 * Type for error handler function.
 */
export type ErrorHandler = (error: AppError) => void;