'use client'

import React, { useEffect, useState } from 'react';

interface FadingTextProps {
  texts: string[];
  interval?: number;      // Total duration per word (including fade in/out)
  fadeDuration?: number;  // Fade duration
  className?: string;
}

export const FadingText: React.FC<FadingTextProps> = ({
  texts,
  interval = 3000,
  fadeDuration = 500,
  className = '',
}) => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setIsVisible(false), interval - fadeDuration);

    const changeTextTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
      setIsVisible(true); // Start fading in
    }, interval);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(changeTextTimer);
    };
  }, [index, interval, fadeDuration, texts.length]);

  return (
    <span
      className={`
        transition-opacity duration-[${fadeDuration}ms]
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${className}
      `}
    >
      {texts[index]}
    </span>
  );
};
