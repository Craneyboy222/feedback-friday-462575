/* API types */

/**
 * Generic API response interface.
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

/**
 * Interface for API error response.
 */
export interface ApiError {
  message: string;
  statusCode: number;
}