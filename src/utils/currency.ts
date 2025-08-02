export const formatCurrency = (amount: number, currencyCode: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyCode }).format(amount);
};

export const parseCurrency = (amount: string): number => {
  return parseFloat(amount.replace(/[^0-9.-]+/g, ''));
};