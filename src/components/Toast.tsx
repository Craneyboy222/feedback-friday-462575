import React from 'react';
import { Transition } from '@headlessui/react';

interface ToastProps {
  show: boolean;
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ show, message, onClose }) => {
  return (
    <Transition
      show={show}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg">
        <div className="flex justify-between items-center">
          <span>{message}</span>
          <button onClick={onClose} className="ml-4 text-sm">Close</button>
        </div>
      </div>
    </Transition>
  );
};

export default Toast;
