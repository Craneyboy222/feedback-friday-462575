import React from 'react';

type TimelineItem = {
  date: string;
  event: string;
};

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full"></div>
          <div className="ml-4">
            <p className="font-medium">{item.event}</p>
            <p className="text-sm text-gray-500">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;