import { useEffect, useState } from 'react';

interface WebSocketMessage<T> {
  data: T | null;
  error: Event | null;
}

export function useWebSocket<T>(url: string): WebSocketMessage<T> {
  const [message, setMessage] = useState<WebSocketMessage<T>>({ data: null, error: null });

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onmessage = (event) => {
      setMessage({ data: JSON.parse(event.data), error: null });
    };

    socket.onerror = (error) => {
      setMessage({ data: null, error });
    };

    return () => {
      socket.close();
    };
  }, [url]);

  return message;
}