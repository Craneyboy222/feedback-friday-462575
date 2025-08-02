export const fetcher = (url: string, options: RequestInit = {}) => 
  fetch(url, options).then(res => res.json());

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};
