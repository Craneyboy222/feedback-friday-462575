import { useState } from 'react';

export function useCounter(initialValue: number = 0): [number, () => void, () => void] {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return [count, increment, decrement];
}