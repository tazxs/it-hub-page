import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = '', className = '' }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    const node = nodeRef.current;
    if (isInView && node) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          node.textContent = Math.round(value) + suffix;
        },
      });

      return () => controls.stop();
    }
  }, [isInView, from, to, duration, suffix]);

  return <span ref={nodeRef} className={className}>{from}{suffix}</span>;
};

export default AnimatedCounter;
