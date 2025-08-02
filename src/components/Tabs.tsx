import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 -mb-px border-b-2 ${index === activeIndex ? 'border-blue-500' : 'border-transparent'} focus:outline-none`}
            onClick={() => setActiveIndex(index)}
            aria-selected={index === activeIndex}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4" role="tabpanel">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
