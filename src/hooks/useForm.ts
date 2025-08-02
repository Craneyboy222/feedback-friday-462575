import { useState } from 'react';

interface FormState<T> {
  values: T;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

export function useForm<T>(initialValues: T): FormState<T> {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const reset = () => setValues(initialValues);

  return { values, handleChange, reset };
}