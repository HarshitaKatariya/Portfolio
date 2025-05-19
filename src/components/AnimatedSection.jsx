import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AnimatedSection = ({ 
  children, 
  className = "", 
  id = "",
  initial = { opacity: 0, y: 50 }, 
  animate = { opacity: 1, y: 0 },
  exit = { opacity: 0, y: -50 },
  transition = { duration: 0.7, ease: "easeOut" },
  once = true,
  delay = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({
        ...animate,
        transition: { 
          ...transition, 
          delay 
        }
      });
    }
  }, [isInView, animation, animate, delay, transition]);

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial={initial}
      animate={animation}
      exit={exit}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;