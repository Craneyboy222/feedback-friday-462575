import React from 'react';

interface ReviewProps {
  username: string;
  rating: number;
  comment: string;
  date: string;
}

const Review: React.FC<ReviewProps> = ({ username, rating, comment, date }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <div className="flex items-center mb-2">
        <div className="text-lg font-bold text-gray-900">{username}</div>
        <div className="ml-auto text-sm text-gray-500">{date}</div>
      </div>
      <div className="flex items-center mb-2">
        <div className="text-yellow-500">
          {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
        </div>
      </div>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
};

export default Review;
