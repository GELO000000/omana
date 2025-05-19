import { useState } from 'react';
import { HEART_CONFIG, HEART_TYPES } from './constants';

export const useHeartRain = () => {
  const [hearts, setHearts] = useState([]);

  const createHearts = () => {
    const newHearts = Array.from({ length: HEART_CONFIG.count }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      animationDuration: Math.random() * 
        (HEART_CONFIG.maxDuration - HEART_CONFIG.minDuration) + 
        HEART_CONFIG.minDuration,
      type: Math.random() > 0.5 ? HEART_TYPES.PINK : HEART_TYPES.RED,
      delay: Math.random() * 0.5
    }));
    
    setHearts(prev => [...prev, ...newHearts]);
  };

  return { hearts, createHearts };
};