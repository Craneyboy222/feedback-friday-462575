import { useState } from 'react';

export function useNotification() {
  const [permission, setPermission] = useState<NotificationPermission>(Notification.permission);

  const requestPermission = () => {
    if (permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        setPermission(permission);
      });
    }
  };

  const notify = (title: string, options?: NotificationOptions) => {
    if (permission === 'granted') {
      new Notification(title, options);
    }
  };

  return { permission, requestPermission, notify };
}