import { format, parseISO, addDays } from 'date-fns';

export const formatDateISO = (date: Date | string): string => {
  return format(typeof date === 'string' ? parseISO(date) : date, 'yyyy-MM-dd');
};

export const addDaysToDate = (date: Date, days: number): Date => {
  return addDays(date, days);
};