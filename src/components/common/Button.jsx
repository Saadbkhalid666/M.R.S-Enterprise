import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
  isLoading = false,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300';
  
  const variants = {
    primary: 'bg-primary hover:bg-secondary text-white shadow-lg hover:shadow-primary/50 hover:-translate-y-1',
    secondary: 'bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-blue-400 hover:-translate-y-1',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-1',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      type={type}
      className={classNames(
        baseClasses,
        variants[variant],
        sizes[size],
        disabled || isLoading ? 'opacity-50 cursor-not-allowed transform-none hover:transform-none shadow-none' : '',
        className
      )}
      onClick={onClick}
      disabled={disabled || isLoading}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : null}
      {children}
    </motion.button>
  );
};

export default Button;
