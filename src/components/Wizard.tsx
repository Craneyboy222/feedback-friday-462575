import React, { useState } from 'react';

interface WizardStepProps {
  title: string;
  content: React.ReactNode;
}

interface WizardProps {
  steps: WizardStepProps[];
}

const Wizard: React.FC<WizardProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="wizard">
      <div className="p-4">
        <h2 className="text-lg font-bold">{steps[currentStep].title}</h2>
        <div className="mt-2">{steps[currentStep].content}</div>
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={prevStep} disabled={currentStep === 0} className="btn btn-secondary">Previous</button>
        <button onClick={nextStep} disabled={currentStep === steps.length - 1} className="btn btn-primary">Next</button>
      </div>
    </div>
  );
};

export default Wizard;