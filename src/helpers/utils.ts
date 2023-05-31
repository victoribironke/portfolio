export const formatTime = (t: number): string => {
  return t < 10 ? `0${t}` : `${t}`;
};
