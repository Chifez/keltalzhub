export const getNumber = (num: number): string => {
  if (num < 10) {
    return '0' + num;
  }
  return String(num);
};
