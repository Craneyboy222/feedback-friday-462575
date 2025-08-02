/* Common types */

/**
 * Interface for a paginated list response.
 */
export interface PaginatedList<T> {
  items: T[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}