import React, { useState } from 'react';

interface RatingProps {
  maxRating: number;
  initialRating: number;
  onRate: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ maxRating, initialRating, onRate }) => {
  const [currentRating, setCurrentRating] = useState(initialRating);

  const handleRating = (rating: number) => {
    setCurrentRating(rating);
    onRate(rating);
  };

  return (
    <div className="rating-component">
      {[...Array(maxRating)].map((_, index) => (
        <button
          key={index}
          onClick={() => handleRating(index + 1)}
          className={index < currentRating ? 'text-yellow-500' : 'text-gray-400'}
          aria-label={`Rate ${index + 1} out of ${maxRating}`}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default Rating;