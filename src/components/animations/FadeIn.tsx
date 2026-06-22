'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeInProps {
  children?: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  const directionMap = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionMap[direction],
        filter: 'blur(8px)',
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              filter: 'blur(0px)',
            }
          : {}
      }
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
