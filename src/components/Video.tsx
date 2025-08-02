import React from 'react';
import PropTypes from 'prop-types';

interface VideoProps {
  src: string;
  controls?: boolean;
  className?: string;
}

const Video: React.FC<VideoProps> = ({ src, controls = true, className }) => {
  return (
    <video src={src} controls={controls} className={`w-full ${className}`} />
  );
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  controls: PropTypes.bool,
  className: PropTypes.string,
};

export default Video;