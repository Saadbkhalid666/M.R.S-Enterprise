import React from 'react';
import classNames from 'classnames';

const Card = ({ children, className, hover = true, ...props }) => {
  return (
    <div
      className={classNames(
        'bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8',
        'shadow-sm transition-all duration-300',
        hover && 'hover:-translate-y-2 hover:shadow-xl hover:border-primary/50',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
