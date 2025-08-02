import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <Transition show={isOpen} enter="transition ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
      <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="drawer-title" role="dialog" aria-modal="true">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>
          <div className="fixed inset-y-0 right-0 flex max-w-full">
            <div className="w-screen max-w-md">
              <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                <div className="flex-1 h-0 overflow-y-auto">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Drawer;