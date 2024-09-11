import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const date = new Date(createdAt);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffInSeconds = Math.floor(diff / 1000);
  const diffInMinutes = Math.floor(diff / 1000 / 60);
  const diffInHours = Math.floor(diff / 1000 / 60 / 60);
  const diffInDays = Math.floor(diff / 1000 / 60 / 60 / 24);
  const diffInMonths = Math.floor(diff / 1000 / 60 / 60 / 24 / 30);
  const diffInYears = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  } else if (diffInDays < 30) {
    return `${diffInDays} days ago`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths} months ago`;
  } else {
    return `${diffInYears} years ago`;
  }
};

export const formatAndDivideNumber = (num: number): string => {
  if (num < 1000) {
    return num.toString();
  } else if (num < 1000000) {
    return `${(num / 1000).toFixed(1)}k`;
  } else {
    return `${(num / 1000000).toFixed(1)}m`;
  }
};
export const getJoinedDate = (date: Date): string => {
  // Extract the month and year from the Date object
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Create the joined date string (e.g., "September 2023")
  const joinedDate = `${month} ${year}`;

  return joinedDate;
};
