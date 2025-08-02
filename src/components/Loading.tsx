import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loading: React.FC = () => (
  <div className="flex justify-center items-center w-full h-full" role="status" aria-label="Loading">
    <AiOutlineLoading3Quarters className="animate-spin text-gray-500" size={24} />
  </div>
);

export default Loading;