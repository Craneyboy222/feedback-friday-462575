import React from 'react';

export const LoadingSpinner = () => (
  <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
);

export const Alert = ({ message, type }: { message: string; type: 'success' | 'error' }) => (
  <div className={`alert alert-${type}`} role="alert">
    {message}
  </div>
);