/* Validation types */

/**
 * Interface for input validation result.
 */
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

/**
 * Type for a field validation function.
 */
export type FieldValidator = (value: any) => ValidationResult;