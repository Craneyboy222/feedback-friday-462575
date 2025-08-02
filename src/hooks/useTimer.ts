import { useState, useEffect } from 'react';

export function useTimer(initialTime: number = 0): [number, () => void, () => void] {
  const [time, setTime] = useState<number>(initialTime);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const start = () => setIsActive(true);
  const stop = () => setIsActive(false);

  return [time, start, stop];
}