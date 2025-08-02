import { format as formatDate } from 'date-fns';

export const formatUserName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};

export const formatDateForDisplay = (date: Date): string => {
  return formatDate(date, 'MMMM do, yyyy');
};