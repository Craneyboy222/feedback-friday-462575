import { useState } from 'react';

interface ValidationState {
  errors: { [key: string]: string };
  validate: (values: any) => boolean;
}

export function useValidation<T>(initialErrors: T): ValidationState {
  const [errors, setErrors] = useState<T>(initialErrors);

  const validate = (values: any) => {
    const newErrors = { ...errors };
    let isValid = true;

    Object.keys(values).forEach((key) => {
      if (!values[key]) {
        newErrors[key] = 'This field is required';
        isValid = false;
      } else {
        newErrors[key] = '';
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  return { errors, validate };
}