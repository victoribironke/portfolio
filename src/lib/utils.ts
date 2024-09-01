import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getGitHubYears = (joinYear: number) => {
  if (!joinYear) return [];

  const currentYear = new Date().getFullYear();
  const duration = currentYear - joinYear + 1;
  const years = Array.from({ length: duration }, (_year, i) => currentYear - i);

  return years;
};

export const formatTime = (t: number): string => {
  return t < 10 ? `0${t}` : `${t}`;
};

export const addRefToUrl = (url: string) => url + "?ref=victoribironke.com";
