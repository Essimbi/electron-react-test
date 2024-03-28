import { useEffect, useState } from 'react';
import { useDimensionsType } from '../configs/types';

export const useDimensions = (): useDimensionsType => {
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState<number>(window.innerHeight);

  window.addEventListener('resize', () => {
    setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth);
  });

  useEffect(() => {}, [innerHeight, innerWidth]);

  return {
    innerHeight,
    innerWidth,
  };
};
export function getWindowSize(): useDimensionsType {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
