import React from 'react';

interface NotificationProps {
  title: string;
  description: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ title, description, onClose }) => {
  return (
    <div className="bg-white rounded-lg border shadow-lg p-4 max-w-sm w-full">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <span className="sr-only">Close</span>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Notification;
