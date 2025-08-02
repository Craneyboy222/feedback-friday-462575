import React from 'react';

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className={`flex items-center ${index < currentStep ? 'text-blue-500' : 'text-gray-500'}`}>
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full">
              <span className="text-sm font-medium">{index + 1}</span>
            </div>
            <span className="ml-2 text-sm font-medium">{step}</span>
          </div>
          {index < steps.length - 1 && <div className="flex-1 h-1 bg-gray-300 mx-4"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;