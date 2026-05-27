import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

const AnimatedHeading = ({ 
  text, 
  className, 
  as: Component = 'h2',
  delay = 0 
}) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay * 0.3 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <Component className={classNames('flex flex-wrap', className)}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="flex flex-wrap"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            style={{ marginRight: '0.25em' }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
};

export default AnimatedHeading;
