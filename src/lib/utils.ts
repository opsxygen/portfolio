import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getImageDimensions = (ref: string) => {
  const dimensions = ref.match(/(\d+)x(\d+)/);
  return dimensions
    ? {
        width: parseInt(dimensions[1], 10),
        height: parseInt(dimensions[2], 10),
      }
    : {
        width: 800,
        height: 600,
      };
};
