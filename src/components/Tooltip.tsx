import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  return (
    <Tippy content={content} arrow={true} delay={100} aria={{ content: 'describedby' }}>
      <span>{children}</span>
    </Tippy>
  );
};

export default Tooltip;
